import "./styles/style.scss";
import AuthPage from "./pages/AuthPage";
import { useState } from "react";
import RoomPage from "./pages/RoomPage"

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("TOKEN"));

  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }

  return <div className="container"><RoomPage /></div>;
};

export default App;
