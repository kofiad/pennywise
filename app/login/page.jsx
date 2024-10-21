"use client";
import LoginForm from "@/components/auth/LoginForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../loading";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard/home");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <section className="min-h-screen flex justify-center items-center bg-purple-100 dark:bg-purple-900">
      <div className="flex flex-col items-center justify-center px-6 w-full max-w-md mx-auto">
        {/* Logo */}
        <span className="font-bold text-4xl text-purple-900 p-4">PennyWise</span>
        {/* Login Form */}
        <LoginForm />
      </div>
    </section>
  );
}
