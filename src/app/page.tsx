import { NotificationWidget } from "@/components/notification-widget";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-300 min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-cover">
        <Image alt="" src={"/tailwindcss-background.jpg"} fill={true} />
        <div className="absolute inset-0 bg-grid" />
      </div>
      <div className="w-full max-w-lg z-10">
        <NotificationWidget />
      </div>
    </main>
  );
}
