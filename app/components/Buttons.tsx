import Link from "next/link";
import style from "./AuthButtons.module.css";

const Buttons = () => {
  return (
    <div className={style["button-section"]}>
      <Link href="/login">
        <button className={style["login-button"]}>Login</button>
      </Link>
      <Link href="/register">
        <button className={style["register-button"]}>Register</button>
      </Link>
    </div>
  );
};

export default Buttons;
