import { MessageData } from "@/utils/message-generator"
import { motion } from "framer-motion"

interface NotificationWidgetItemProps
  extends React.HTMLAttributes<HTMLLIElement> {
  message: MessageData
  isSelected: boolean
  onClick(): void
}

const NotificationWidgetItem = ({
  message,
  isSelected,
  onClick,
}: NotificationWidgetItemProps) => {
  return (
    <motion.li
      key={message.id}
      className="relative"
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: "auto",
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.3,
          opacity: {
            delay: 0.1,
          },
        },
      }}
      exit={{ height: 0, opacity: 0 }}
      transition={{
        duration: 0.6,
        type: "spring",
        bounce: 0,
        opacity: {
          duration: 0.12,
        },
      }}
    >
      <div className="py-0.5 transition">
        <button
          className={`${isSelected ? "bg-blue-400 text-white" : "bg-white text-zinc-600"} flex flex-col w-full p-4 rounded-md transition-colors items-start`}
          onClick={onClick}
        >
          <p className="font-medium transition-colors">
            {message.content.title}
          </p>
          <span
            className={`${isSelected ? "text-zinc-100" : "text-zinc-400"} text-sm transition-colors`}
          >
            {message.content.subtitle}
          </span>
        </button>
      </div>
    </motion.li>
  )
}

NotificationWidgetItem.displayName = "NotificationWidgetItem"

export { NotificationWidgetItem }
