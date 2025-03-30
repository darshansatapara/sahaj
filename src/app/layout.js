"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import useAuthStore from "@/store/useAuthStore.js";
import axiosInstance from "@/utils/axios";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.get("/auth/me", {
          withCredentials: true,
        });
        console.log(response.data);
        setAuth(true, response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setAuth(false, null);
        } else {
          console.log(error.response);
        }
      }
    };

    checkAuth();
  }, [setAuth]);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
