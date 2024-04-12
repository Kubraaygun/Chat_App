import "./styles/style.scss";
import AuthPage from "./pages/AuthPage";
import { useState } from "react";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("TOKEN"));
  const [room, setRoom] = useState(null);

  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }

  return (
    <div className="container">
      {room ? (<ChatPage />) :( <RoomPage setRoom={setRoom} />)}
    </div>
  );
};

export default App;
