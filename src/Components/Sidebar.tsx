const conversations = [
  { id: 1, name: "Alice", lastMessage: "Hey, how are you?" },
  { id: 2, name: "Bob", lastMessage: "Meeting at 5 PM" },
  { id: 3, name: "Charlie", lastMessage: "Got the files" },
];
const Sidebar = () => {
  return (
    <aside className="w-64 bg-lightGray p-4 border-r border-gray-300">
      <h2 className="text-lg font-bold mb-4">Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id} className="border-b border-gray-300 py-2">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <div className="font-semibold">{conversation.name}</div>
                <div className="text-gray-600 text-sm">
                  {conversation.lastMessage}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
