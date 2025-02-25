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
    <div>
      <p>Welcome {user?.displayName}</p>
    </div>
  );
};

export default MyProfile;
