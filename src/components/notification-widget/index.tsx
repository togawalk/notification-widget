"use client"

import { MessageData, generateMessage } from "@/utils/message-generator"
import { useState } from "react"
import { NotificationWidgetItem } from "./notification-widget-item"
import { AnimatePresence } from "framer-motion"
import { useKeyPress } from "@/hooks/useKeyPress"
import { toast } from "react-toastify"

const NotificationWidget = () => {
  const [messages, setMessages] = useState<MessageData[]>([])
  const [selectedMessages, setSelectedMessages] = useState<string[]>([])

  const addMessage = () => {
    try {
      const newMessage = generateMessage()
      setMessages((prev) => {
        return [...prev, newMessage]
      })
      toast("Message successfully added")
    } catch (error) {
      console.error("Error while adding message:", error)
      toast("Error occurred while adding message")
    }
  }

  const toggleMessage = (id: string) => {
    try {
      setSelectedMessages((prev) => {
        if (selectedMessages.includes(id)) {
          return prev.filter((i) => i != id)
        }
        return [...prev, id]
      })
    } catch (error) {
      console.error("Error while toggle message:", error)
      toast("Error occurred while toggle message")
    }
  }

  const archiveMessages = () => {
    if (selectedMessages.length === 0) {
      toast("No selected messages")
      return
    }

    const countSelectedMessages = selectedMessages.length

    try {
      setMessages((prev) => {
        return prev.filter((message) => !selectedMessages.includes(message.id))
      })
      setSelectedMessages([])
      toast(`${countSelectedMessages} messages successfully deleted`)
    } catch (error) {
      console.error("Error while setting messages:", error)
      toast("Error occurred while deleting messages")
    }
  }

  useKeyPress(["Delete"], () => archiveMessages())

  return (
    <div className="bg-white rounded-xl shadow">
      <div className="flex justify-between border-b-zinc-100 border-b p-4 font-medium">
        <button
          className="text-zinc-400 px-2 py-1 hover:text-zinc-500 -mx-2 transition-colors ease-in"
          onClick={addMessage}
        >
          Add
        </button>
        <button
          className="text-zinc-400 px-2 py-1 hover:text-zinc-500 transition-colors ease-in"
          onClick={archiveMessages}
        >
          Archive
        </button>
      </div>
      <div className="max-h-[400px] px-3 py-2 overflow-y-scroll">
        <ul>
          <AnimatePresence initial={false}>
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
                <NotificationWidgetItem
                  onClick={() => toggleMessage(message.id)}
                  isSelected={isSelected}
                  message={message}
                  key={message.id}
                />
              )
            })}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  )
}

NotificationWidget.displayName = "NotificationWidget"

export { NotificationWidget }
