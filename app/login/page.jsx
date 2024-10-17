"use client"
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
      router.push("/dashboard/home/overview");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <section className="bg-sky-300 min-h-screen py-10 dark:bg-sky-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-25 h-10 mr-2 text-sky-600"
            src="/logo.svg"
            alt="logo"
          />
        </a>
        <LoginForm />
      </div>
    </section>
  );
}
