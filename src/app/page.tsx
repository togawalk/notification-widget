"use client"
import { NotificationWidget } from "@/components/notification-widget"
import Image from "next/image"

export default function Home() {
  return (
    <main className="bg-zinc-300 min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-cover">
        <Image
          className="transition-opacity opacity-0 duration-700"
          alt=""
          src={"/tailwindcss-background.jpg"}
          fill={true}
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <div className="absolute inset-0 bg-grid" />
      </div>
      <div className="w-full max-w-lg z-10">
        <NotificationWidget />
      </div>
    </main>
  )
}
