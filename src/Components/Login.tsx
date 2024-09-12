import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { ContextWrapper } from "./ContextWrapper";
import { useContext } from "react";

const Login = () => {
  const { setIsLoggedIn } = useContext(ContextWrapper);
  const navigate = useNavigate();
  const handleSignIn = async () => {
    const userData = await signInWithPopup(auth, new GoogleAuthProvider());
    await setDoc(doc(db, "users", userData.user.uid), {
      uid: userData.user.uid,
      name: userData.user.displayName,
      email: userData.user.email,
      profile_pic: userData.user.photoURL,
    });
    setIsLoggedIn(true);
    navigate("/home");
  };
  return (
    <div className="bg-neutral-950 h-screen flex">
      <div className="w-1/2">
        <h1 className="text-pink-900 text-7xl p-14">Gossip !</h1>
        <div className="place-content-center text-center ml-20 mt-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgb(131 24 67)"
            className="size-3/4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </div>
      </div>
      <div className="place-content-center text-center w-1/2 m-10">
        <div className="bg-neutral-1000 border-1 border-gray-500 shadow-2xl shadow-pink-500/20 rounded-xl p-10">
          <h1 className="text-pink-900 text-2xl">Login</h1>
          <div className="flex justify-center mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(131 24 67)"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
              />
            </svg>
          </div>
          <button
            onClick={handleSignIn}
            className="text-pink-900 text-xl mt-5 border border-pink-900 rounded-xl p-2"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
