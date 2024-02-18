'use client'

import { MessageData, generateMessage } from "@/utils/message-generator"
import { useState } from "react"
import { NotificationWidgetItem } from "./notification-widget-item"

const NotificationWidget = () => {
  const [messages, setMessages] = useState<MessageData[]>([])
  const [selectedMessages, setSelectedMessages] = useState<string[]>([])

  const addMessage = () => {
    const newMessage = generateMessage()
    setMessages((prev) => {
      return [...prev, newMessage]
    })

  }

  const toggleMessage = (id: string) => {
    setSelectedMessages((prev) => {
      if (selectedMessages.includes(id)) {
        return prev.filter((i) => i != id)
      }
      return [...prev, id]
    })
  }

  const archiveMessages = () => {
    setMessages((prev) => {
      return prev.filter((message) => !selectedMessages.includes(message.id))
    })
    setSelectedMessages([])
  }

  return (
    <div className="bg-white rounded-xl shadow">
      <div className="flex justify-between border-b-zinc-100 border-b p-4 font-medium">
        <button className="text-zinc-400 px-2 py-1 hover:text-zinc-500 -mx-2 transition-colors ease-in" onClick={addMessage}>Add</button>
        <button className="text-zinc-400 px-2 py-1 hover:text-zinc-500 transition-colors ease-in" onClick={archiveMessages}>Archive</button>
      </div>
      <div className="max-h-[400px] px-3 py-2 overflow-y-scroll">
        <ul>
          {messages.length == 0 && (
            <li>
              <p className="text-center font-semibold py-4 text-zinc-800">
                No Notifications
              </p>
            </li>
          )}
          {[...messages].reverse().map((message) => {
            const isSelected = selectedMessages.includes(message.id)
            return (
              <NotificationWidgetItem onClick={() => toggleMessage(message.id)} isSelected={isSelected} message={message} key={message.id} />
            )
          })}
        </ul>

      </div>
    </div>
  )
}

NotificationWidget.displayName = 'NotificationWidget'

export { NotificationWidget }
