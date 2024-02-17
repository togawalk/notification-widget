import { NotificationWidget } from "@/components/notification-widget";

export default function Home() {
  return (
    <main className="bg-zinc-300 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg">
        <NotificationWidget />
      </div>
    </main>
  );
}
