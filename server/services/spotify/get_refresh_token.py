import httpx, base64

from dotenv import load_dotenv
import os

load_dotenv()
CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")
REDIRECT_URL = os.getenv("REDIRECT_URL")
REFRESH_CODE = ""

credentials = base64.b64encode(f"{CLIENT_ID}:{CLIENT_SECRET}".encode("utf-8")).decode("utf-8")
r = httpx.post("https://accounts.spotify.com/api/token", headers={
    "Authorization": f"Basic {credentials}"
}, data={
    "grant_type": "authorization_code",
    "code": REFRESH_CODE,
    "redirect_uri": REDIRECT_URL
})
print(r.json())  # Save this to .env