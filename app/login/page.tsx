import Link from "next/link";
import { useEffect, useState } from 'react';
import styles from './LoginPage.module.css';
import { useRouter } from 'next/navigation';
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();
    const { user, login, loading } = useAuth();

    useEffect(() => {
        if (!loading && user) {
            router.push('/'); //TODO - create routes for onboarding
        }
    }, [loading, user, router]);

    const handleLogin = async () => {
        try {
            await login(email, password);
        } catch (error) {
            console.error("There was an error logging in with firebase: ", error);
        }
    }

    return(
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
                        />
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
                        <button className={styles.submitButton} type="submit">Submit</button>
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
            </form>
            
        </div> 
    );
};

export default LoginPage;