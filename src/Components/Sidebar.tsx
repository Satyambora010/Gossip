import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import { ContextWrapper } from "./ContextWrapper";
import { useContext } from "react";

const Sidebar = () => {
  const { setIsLoggedIn } = useContext(ContextWrapper);
  const handleSignOut = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
  };
  return (
    <div className="w-1/3 border border-slate-950 bg-black rounded-xl m-5 shadow-2xl shadow-pink-500/20">
      <div className="pt-2 pl-4 pr-4 flex justify-between">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgb(131 24 67)"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          <h2 className="text-pink-900 text-2xl">Hi Satyam !</h2>
        </div>
        <div>
          <button className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(131 24 67)"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
          <button onClick={handleSignOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(131 24 67)"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <input
          type="text"
          placeholder="search chats"
          className="bg-pink-900 w-full border border-pink-900 text-black rounded-xl p-2 pl-4 pr-40 mr-3 ml-3 focus:outline-none placeholder:text-black"
        />
      </div>
      <h3 className="text-pink-900 text-xl font-bold ml-4 mt-5">Chats</h3>
    </div>
  );
};

export default Sidebar;
