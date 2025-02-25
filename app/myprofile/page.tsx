import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import styles from "./MyProfile.module.css";

const MyProfile = () => {
  const router = useRouter();
  return (
    <div>
      <p>Welcome</p>
    </div>
  );
};

export default MyProfile;
