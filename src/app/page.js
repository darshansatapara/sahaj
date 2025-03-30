"use client";
import Login from "@/pages/Login";
import Home from "../pages/Home";
import useAuthStore from "@/store/useAuthStore";
import AdminDashboard from "@/pages/AdminDashboard";
export default function Page() {
  const user = useAuthStore((state) => state?.user);
  console.log(user);
  return (
    <div>
      {user?.role === "admin" ? (
        <AdminDashboard />
      ) : (
        <>
          <Home />
        </>
      )}
    </div>
  );
}
