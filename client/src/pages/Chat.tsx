import { useChat } from "../hooks/useChat";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";

export default function Chat() {
  const { messages, loading, handleSend } = useChat();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">AI Chat</h1>

      <ChatWindow messages={messages} />
      <ChatInput onSend={handleSend} loading={loading} />
    </div>
  );
}