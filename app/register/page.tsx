"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import styles from "./RegisterPage.module.css";

const Register = () => {
  const { register } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic form validation
    if (!email || !password || !confirmEmail || !confirmPassword) {
      setError("All fields are required.");
      return;
    } else if (email !== confirmEmail) {
      setError("Emails do not match.");
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      await register(email, password, username);
      //Users won't be redirected to login immediately after registration.
      setError(
        "Registration successful. Please check your email for a verification link before logging in."
      );
      // We might need thi...? Delay redirection to allow users to read the success message.
      // setTimeout(() => {
      //     router.push("/login");
      //   }, 3000);
      router.push("/login");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.titleSection}>
        <h1>Register</h1>
      </div>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <div className={styles.inputArea}>
          <div className={styles.aLabel}>
            <label>Username</label>
          </div>
          <div className={styles.anInput}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className={styles.errorMessageArea}>
            <p>error message</p>
          </div>
        </div>
        <div className={styles.inputArea}>
          <div className={styles.aLabel}>
            <label>Email</label>
          </div>
          <div className={styles.anInput}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className={styles.errorMessageArea}>
            <p>error message</p>
          </div>
        </div>
        <div className={styles.inputArea}>
          <div className={styles.aLabel}>
            <label>Confirm email</label>
          </div>
          <div className={styles.anInput}>
            <input
              type="email"
              placeholder="Confirm email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            ></input>
          </div>
          <div className={styles.errorMessageArea}>
            <p>error message</p>
          </div>
        </div>
        <div className={styles.inputArea}>
          <div className={styles.aLabel}>
            <label>Password</label>
          </div>
          <div className={styles.anInput}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className={styles.errorMessageArea}>
            <p>error message</p>
          </div>
        </div>
        <div className={styles.inputArea}>
          <div className={styles.aLabel}>
            <label>Confirm password</label>
          </div>
          <div className={styles.anInput}>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </div>
          <div className={styles.errorMessageArea}>
            <p>error message</p>
          </div>
        </div>
        <div className={styles.buttonsArea}>
          <div className={styles.buttonGroup}>
            {/* <Link href="/login"> */}
            <button type="submit" className={styles.registerButton}>
              Register
            </button>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles.redirectLinkArea}>
          <div className={styles.redirectLink}>
            <Link href="/login" className={styles.redirectLink}>
              Go to login page
            </Link>
          </div>
        </div>
        <div className={styles.messageArea}>
          {error && <p className={styles.errorMessageArea}>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Register;
