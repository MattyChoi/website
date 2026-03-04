from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
from dotenv import load_dotenv
import os
from openai import OpenAI


# Load up environment environment variables
load_dotenv()
app = FastAPI()

# 
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

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


@app.post("/api/chat")
async def chat(req: ChatRequest):
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are Matthew's AI assistant."},
            {"role": "user", "content": req.message}
        ]
    )

    return {"reply": completion.choices[0].message.content}

@app.get("/api/hello")
def read_root():
    return {"message": "Hello from FastAPI backend!"}