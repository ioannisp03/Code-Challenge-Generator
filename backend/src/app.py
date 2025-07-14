from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import challenge, webhooks

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], #can add port 3000 too
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Gets the router instance (challenge.router) and mounts it on the app
app.include_router(challenge.router, prefix="/api")
app.include_router(webhooks.router, prefix="/webhooks")