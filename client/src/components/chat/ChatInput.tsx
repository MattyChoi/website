import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
  loading: boolean;
}

export default function ChatInput({ onSend, loading }: Props) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    onSend(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        className="flex-grow border rounded px-3 py-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "..." : "Send"}
      </button>
    </form>
  );
}