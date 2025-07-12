from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], #can add port 3000 too
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
