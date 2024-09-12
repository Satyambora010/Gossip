const ChatWindow = () => {
  return (
    <div className="w-2/3 border border-slate-950 bg-black rounded-xl mt-5 mb-5 mr-5 shadow-2xl shadow-pink-500/20 flex flex-col">
      <div className="flex justify-between border-b border-black shadow-2xl shadow-pink-500/30">
        <h1 className="text-pink-900 text-xl p-3 pl-4">Username</h1>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="rgb(131 24 67)"
          className="size-48 opacity-40"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
        <p className="text-pink-900 text-xl opacity-40">Gossip goes here</p>
      </div>
      <div className="flex gap-2 p-4 border-t border-black shadow-[0_-4px_10px_-1px_rgba(236,72,153,0.3)]">
        <input
          type="text"
          placeholder="Type your message"
          className="w-full pl-2 bg-black text-pink-900 focus:outline-none placeholder:text-pink-900 rounded-2xl"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgb(131,24,67)"
            className="size-6 transform -rotate-45"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
