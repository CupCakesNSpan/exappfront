import React from 'react';
import style from "./AuthButtons.module.css";
import { useRouter } from "next/navigation";

const AuthButtons = () => {

  const router = useRouter();

  return (
    <div className={style["button-section"]}>
        <button className={style["login-button"]} onClick={() => router.push("/login")}>Login</button>
        <button className={style["register-button"]} onClick={() => router.push("/register")}>Register</button>
    </div>
  );
};

export default AuthButtons;
