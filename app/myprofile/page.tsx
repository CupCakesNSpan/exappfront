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
        <button>Your Exercise Now</button>
        <button>Barriers</button>
        <button>Motivation</button>
        <button>Become an exerciser</button>
        <button>Goals</button>
        <button>Contract</button>
      </div>
    </div>
  );
};

export default MyProfile;
