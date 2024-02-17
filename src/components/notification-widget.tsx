export const NotificationWidget = () => {
  return (
    <div className="bg-white rounded-xl">
      <div className="flex justify-between border-b-zinc-100 border-b p-4 font-medium">
        <button className="text-zinc-400 px-2 py-1 hover:text-zinc-500 -mx-2 transition-colors ease-in">Add</button>
        <button className="text-zinc-400 px-2 py-1 hover:text-zinc-500 transition-colors ease-in">Archive</button>
      </div>
      <div className="max-h-[400px] px-3 py-2 overflow-y-scroll">
        <ul>
          <li>
            <div className="py-0.5 transition">
              <button className="flex flex-col w-full p-4 rounded-md transition-colors items-start">
                <p className="font-medium transition-colors">Title</p>
                <span className="text-sm transition-colors">Subtitle</span>
              </button>
            </div>
          </li>
        </ul>

      </div>
    </div>
  )
}
