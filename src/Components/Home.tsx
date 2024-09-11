import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";

const Home = (props: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleSignOut = async () => {
    await signOut(auth);
    props.setIsLoggedIn(false);
  };
  return (
    <div>
      <h1>This is Home page</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;
