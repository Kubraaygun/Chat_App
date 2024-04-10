import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

const AuthPage = () => {
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {});
  };
  return (
    <div>
      <div>
        <h1>Chat Odası</h1>
        <p>Devam etmek için giriş yapın</p>
        <button onClick={handleClick}>Google İle Gir </button>
      </div>
    </div>
  );
};

export default AuthPage;
