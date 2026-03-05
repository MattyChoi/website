from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

import httpx
import os
import base64

from dotenv import load_dotenv
import os
from openai import OpenAI

from classes.llm import ChatRequest
from api import spotify


# Load up environment environment variables
load_dotenv()

# Instantiate the fastapi object
app = FastAPI()

# Configure CORS to allow your frontend to access the backend
origins = [
    "http://localhost:5173", # # local dev
    "http://127.0.0.1:5173", # # local dev
    "https://mattychoi.com", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add spotify routes
app.include_router(spotify.router)

# client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


@app.get("/hello")
def read_root():
    return {"message": "Hello from FastAPI backend!"}