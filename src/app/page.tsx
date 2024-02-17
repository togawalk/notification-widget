import { NotificationWidget } from "@/components/notification-widget";

export default function Home() {
  return (
    <main className="bg-zinc-300 min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-grid"/>
      <div className="w-full max-w-lg z-10">
        <NotificationWidget />
      </div>
    </main>
  );
}
