import { MessageData } from "@/utils/message-generator"

interface NotificationWidgetItemProps extends React.HTMLAttributes<HTMLLIElement> {
  message: MessageData
  isSelected: boolean
  onClick(): void
}


const NotificationWidgetItem = ({ message, isSelected, onClick }: NotificationWidgetItemProps) => {
  return (
    <li key={message.id}>
      <div className="py-0.5 transition">
        <button
          className={`${isSelected ? 'bg-blue-400 text-white' : "bg-white text-zinc-600"} flex flex-col w-full p-4 rounded-md transition-colors items-start`}
          onClick={onClick}
        >
          <p className="font-medium transition-colors">{message.content.title}</p>
          <span className={`${isSelected ? "text-zinc-100" : "text-zinc-400"} text-sm transition-colors`}>{message.content.subtitle}</span>
        </button>
      </div>
    </li>
  )
}

NotificationWidgetItem.displayName = 'NotificationWidgetItem'

export { NotificationWidgetItem }
