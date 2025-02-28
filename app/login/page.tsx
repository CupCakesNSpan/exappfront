"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("/myprofile");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.titleSection}>
        <h1>Login</h1>
      </div>
      <form className={styles.loginPanel} onSubmit={handleLogin}>
        <div className={styles.inputArea}>
          <div className={styles.aLabel}>
            <label>Email</label>
          </div>
          <div className={styles.anInput}>
            <input
              type="email"
              placeholder="youremail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
          </div>
          <div className={styles.errorMessageArea}>
            <p>Error message</p>
          </div>
        </div>
        <div className={styles.inputArea}>
          <div className={styles.aLabel}>
            <label>Password</label>
          </div>
          <div className={styles.anInput}>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.errorMessageArea}>
            <p>Error message</p>
          </div>
        </div>
        <div className={styles.buttonsArea}>
          <div className={styles.buttonGroup}>
            <button className={styles.submitButton} type="submit">
              Submit
            </button>
          </div>
        </div>
        <div className={styles.redirectLinkArea}>
          <div className={styles.redirectLink}>
            <Link href="/register" className={styles.redirectLink}>
              Need to register? Go here.
            </Link>
          </div>
        </div>
        <div className={styles.messageArea}>
          <p>This is where a message will go if one is necessary</p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
