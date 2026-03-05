import type { Message } from "../../types/chat";

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-xl max-w-md ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-900"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}