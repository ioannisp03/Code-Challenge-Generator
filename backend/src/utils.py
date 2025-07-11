# Frontend 
# Clerk athenticates from the front EncodingWarning
# Issues a JWT Token to the backend
# Backend connects to clerk with secret key and validate the key (network or networkless (using JWT token))

from fastapi import HTTPException
from clerk_backend_api import Clerk, AuthenticateRequestOptions
import os
from dotenv import load_dotenv

load_dotenv()

clerk_sdk = Clerk(bearer_auth=os.getenv("CLERK_SECRET_KEY"))

def authenticate_and_get_user_details(request):
    try:
        request_state = clerk_sdk.authenticate_request(
            request,
            AuthenticateRequestOptions(
                authorized_parties=["http://localhost:5173","http://localhost:5174"],
                jwt_key=os.getenv("JWT_KEY") # When we pass the JWT key, the verification becomes serverless. If we don't, Clerk will send request to the Clerk server
            )
        )
        if not request_state.is_authenticated:
            raise HTTPException(status_code=401, detail="Invalid token")
        user_id = request_state.payload.get("sub") #When we decode the token, sub is where the ID is stored
        
        return {"user_id": user_id}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))