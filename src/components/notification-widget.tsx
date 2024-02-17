'use client'

import { MessageData, generateMessage } from "@/utils/message-generator"
import { useState } from "react"

export const NotificationWidget = () => {
  const [messages, setMessages] = useState<MessageData[]>([])
  const [selectedMessages, setSelectedMessages] = useState<string[]>([])

  const addMessage = () => {
    const newMessage = generateMessage()

    setMessages((prev) => {
      return [...prev, newMessage]
    })

  }

  return (
    <div className="bg-white rounded-xl shadow">
      <div className="flex justify-between border-b-zinc-100 border-b p-4 font-medium">
        <button className="text-zinc-400 px-2 py-1 hover:text-zinc-500 -mx-2 transition-colors ease-in" onClick={addMessage}>Add</button>
        <button className="text-zinc-400 px-2 py-1 hover:text-zinc-500 transition-colors ease-in">Archive</button>
      </div>
      <div className="max-h-[400px] px-3 py-2 overflow-y-scroll">
        <ul>
          {[...messages].reverse().map((message) => {
            return (
              <li key={message.id}>
                <div className="py-0.5 transition">
                  <button className="flex flex-col w-full p-4 rounded-md transition-colors items-start">
                    <p className="font-medium transition-colors">{message.content.title}</p>
                    <span className="text-sm transition-colors">{message.content.subtitle}</span>
                  </button>
                </div>
              </li>
            )
          })}
        </ul>

      </div>
    </div>
  )
}
