const API_BASE = import.meta.env.VITE_API_URL || "/api";

export async function sendMessage(message: string) {
  const res = await fetch(`${API_BASE}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch response");
  }

  return res.json();
}