import Link from "next/link";
import styles from './LoginPage.module.css';

const LoginPage = () => {
    return(
        <div className={styles.loginPage}>
            <div className={styles.titleSection}>
                <h1>Login</h1>
            </div>
            <div className={styles.loginPanel}>
                <div className={styles.inputArea}>
                    <div className={styles.aLabel}>
                        <label>Email</label>
                    </div>
                    <div className={styles.anInput}>
                        <input type="email" placeholder="youremail@example.com"></input>
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
                        <input type="password" placeholder="password"></input>
                    </div>
                    <div className={styles.errorMessageArea}>
                        <p>Error message</p>
                    </div>
                </div>
                <div className={styles.buttonsArea}>
                    <div className={styles.buttonGroup}>
                        <button type="button" className={styles.submitButton}>Submit</button>
                    </div>
                </div>
                <div className={styles.redirectLinkArea}>
                    <div className={styles.redirectLink}>
                        <Link href="/register" className={styles.redirectLink}>Need to register? Go here.</Link>
                    </div>
                </div>
                <div className={styles.messageArea}>
                    <p>This is where a message will go if one is necessary</p>
                </div>
            </div>
            
        </div> 
    );
};

export default LoginPage;