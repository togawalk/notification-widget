import { generateMessage } from "@/utils/message-generator";

export default function Home() {
  const message = generateMessage()

  return (
    <main className="bg-gray-50 min-h-screen">
      {message.content}
      hello
    </main>
  );
}
