from fastapi import APIRouter, HTTPException

import httpx
import os
import base64
from dotenv import load_dotenv

router = APIRouter()

# Load up environment environment variables
load_dotenv()
CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")
REFRESH_TOKEN = os.getenv("REFRESH_TOKEN")


# Get a fresh access token
async def get_access_token_from_refresh(refresh_token: str) -> str:
    """Exchange a refresh token for a fresh access token."""
    credentials = base64.b64encode(f"{CLIENT_ID}:{CLIENT_SECRET}".encode()).decode()
    print(refresh_token)
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://accounts.spotify.com/api/token",
            headers={"Authorization": f"Basic {credentials}"},
            data={"grant_type": "refresh_token", "refresh_token": refresh_token},
        )
    print(response.json())
    return response.json()["access_token"]


# Fetch the top artists or tracks of a user
async def get_top_items(token: str, item_type: str, limit: int = 50) -> list:
    """Fetch top artists or tracks for a user."""
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"https://api.spotify.com/v1/me/top/{item_type}",
            headers={"Authorization": f"Bearer {token}"},
            params={"limit": limit, "time_range": "medium_term"},
        )
    return [item["id"] for item in response.json().get("items", [])]


# Compute Jaccard similarity between two ID lists
def compute_similarity(your_items: list, user_items: list) -> float:
    """Jaccard similarity between two ID lists."""
    set_a, set_b = set(your_items), set(user_items)
    if not set_a or not set_b:
        return 0.0
    intersection = len(set_a & set_b)
    union = len(set_a | set_b)
    return round((intersection / union) * 100, 1)


# API endpoint to fetch spotify similarity objects
@router.post("/api/spotify/similarity")
async def similarity(payload: dict):
    user_token = payload.get("access_token")
    if not user_token:
        raise HTTPException(status_code=400, detail="Missing access_token")
    
    your_token = await get_access_token_from_refresh(REFRESH_TOKEN)

    # Fetch top tracks and artists for both users in parallel
    your_tracks, your_artists, user_tracks, user_artists = (
        await get_top_items(your_token, "tracks"),
        await get_top_items(your_token, "artists"),
        await get_top_items(user_token, "tracks"),
        await get_top_items(user_token, "artists"),
    )

    track_score = compute_similarity(your_tracks, user_tracks)
    artist_score = compute_similarity(your_artists, user_artists)
    overall = round((track_score + artist_score) / 2, 1)

    return {
        "track_similarity": track_score,
        "artist_similarity": artist_score,
        "overall": overall,
    }