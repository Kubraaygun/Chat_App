import "./styles/style.scss";
import AuthPage from "./pages/AuthPage";
import { useState } from "react";
import RoomPage from "./pages/RoomPage"

const App = () => {
  const [isAuth, setIsAuth] = useState();

  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }

  return <RoomPage />;
};

export default App;
