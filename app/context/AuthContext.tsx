"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  User,
  onIdTokenChanged,
  getIdToken,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/services/clientApp";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    username: string
  ) => Promise<void>;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  token: null,
  login: async () => {},
  register: async () => {},
  handleLogout: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const token = await getIdToken(userCredential.user);
    setUser(userCredential.user);
    setToken(token);
  };

  const register = async (
    email: string,
    password: string,
    username: string
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: username });

      await sendEmailVerification(user);
      console.log("Registration successful. Verification email sent.");

      setUser(user);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    // Maybe we need this too..? Ensure loading starts
    // setLoading(true);
    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        const token = await getIdToken(user);
        setToken(token);
      } else {
        setToken(null);
      }
      // setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, token, login, register, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
