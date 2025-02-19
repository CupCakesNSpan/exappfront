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
    }
    if (email !== confirmEmail) {
      setError("Emails do not match.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await register(email, password);
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.titleSection}>
        <h1>Register</h1>
      </div>
      <div className={styles.registerForm}>
        <div className={styles.inputArea}>
          <div className={styles.aLabel}>
            <label>Username</label>
          </div>
          <div className={styles.anInput}>
            <input type="text" placeholder="username"></input>
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
            <input type="email" placeholder="Email"></input>
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
            <input type="email" placeholder="Confirm email"></input>
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
            <input type="password" placeholder="Password"></input>
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
            <input type="password" placeholder="Confirm password"></input>
          </div>
          <div className={styles.errorMessageArea}>
            <p>error message</p>
          </div>
        </div>
        <div className={styles.buttonsArea}>
          <div className={styles.buttonGroup}>
            <Link href="/login">
              <button type="button" className={styles.registerButton}>
                Register
              </button>
            </Link>
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
          <p>Error message</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
