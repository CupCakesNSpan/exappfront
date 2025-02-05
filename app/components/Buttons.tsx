import Link from "next/link";

const Buttons = () => {
  return (
    <div className="flex justify-center space-x-16 mt-8">
      <Link href="/login">
        <button className="login-button">Login</button>
      </Link>
      <Link href="/register">
        <button className="register-button">Register</button>
      </Link>
    </div>
  );
};

export default Buttons;
