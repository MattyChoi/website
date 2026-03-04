from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
from dotenv import load_dotenv
import os
from openai import OpenAI

from classes.llm import ChatRequest


# Load up environment environment variables
load_dotenv()
app = FastAPI()


# Configure CORS to allow your frontend to access the backend
origins = [
    "http://localhost:3000", # Default React port
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


@app.get("/api/hello")
def read_root():
    return {"message": "Hello from FastAPI backend!"}