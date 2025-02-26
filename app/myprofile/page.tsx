"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./MyProfile.module.css";

const MyProfile = () => {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <div className={styles.myProfilePage}>
      <div className={styles.usernameSection}>
        <p>Welcome {user?.displayName}</p>
      </div>
      <div className={styles.onboardingButtonSection}>
        <button type="button" className={styles.onboardingButton}>
          Complete onboarding
        </button>
      </div>
      <div className={styles.onboardingSection}>
        <button className={styles.exerciseButton}>Your Exercise Now</button>
        <button className={styles.barriersButton}>Barriers</button>
        <button className={styles.motivationButton}>Motivation</button>
        <button className={styles.exerciserButton}>Become an exerciser</button>
        <button className={styles.goalsButton}>Goals</button>
        <button className={styles.contractButton}>Contract</button>
      </div>
    </div>
  );
};

export default MyProfile;
