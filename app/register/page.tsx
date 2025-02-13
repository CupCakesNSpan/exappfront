import Link from "next/link";
import styles from "./RegisterPage.module.css";

const Register = () => {
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
