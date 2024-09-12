import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
const Home = () => {
  return (
    <>
      <div className="flex bg-neutral-900 h-screen">
        <Sidebar />
        <ChatWindow />
      </div>
    </>
  );
};

export default Home;
