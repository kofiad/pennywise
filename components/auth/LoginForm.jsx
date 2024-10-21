"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { getData } from "@/lib/getData";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(false);
  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const token = searchParams.get("token");
    const id = searchParams.get("id");
    if (token && id) {
      setIsVerifying(true);
      const verifyData = { token, id };
      async function verify() {
        const data = await getData(`users/${id}`);
        if (data) {
          try {
            const response = await fetch(`${baseUrl}/api/users/verify`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(verifyData),
            });
            if (response.ok) {
              setIsVerifying(false);
              toast.success("Account Verified Successfully");
            } else {
              setIsVerifying(false);
              toast.error("Something Went wrong");
            }
          } catch (error) {
            setIsVerifying(false);
            console.log(error);
          }
        }
      }
      verify();
    }
    console.log(token);
  }, []);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    try {
      setLoading(true);
      const loginData = await signIn("credentials", { ...data, redirect: false });
      if (loginData?.error) {
        setLoading(false);
        Swal.fire({ title: "Sign-in error", text: "Check your credentials", icon: "error" });
      } else {
        toast.success("Login Successful");
        reset();
        router.push("/dashboard/home");
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({ icon: "error", title: "Something Went wrong", text: "Check your network connection and retry" });
    }
  }

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {isVerifying && <p>verifying please wait...</p>}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Your email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
            placeholder="name@company.com"
            required
          />
          {errors.email && <small className="text-red-600 text-sm">This field is required</small>}
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
            Password
          </label>
          <input
            {...register("password", { required: true })}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5"
            placeholder="••••••••"
            required
          />
          {errors.password && <small className="text-red-600 text-sm">This field is required</small>}
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Link href="/forgot-password" className="font-medium text-sm text-purple-600 hover:underline">
            Forgot Password?
          </Link>
          {loading ? (
            <button disabled type="button" className="w-full bg-purple-700 text-white rounded-lg px-5 py-2.5">
              Signing in, please wait...
            </button>
          ) : (
            <button type="submit" className="w-full bg-purple-600 text-white rounded-lg px-5 py-2.5">
              Login
            </button>
          )}
        </div>
        <div className="flex items-center">
          <div className="w-full bg-slate-500 h-[1px]"></div>
          <span className="mx-2">or</span>
          <div className="w-full bg-slate-500 h-[1px]"></div>
        </div>
        <div>
          <button type="button" className="w-full bg-purple-600 text-white rounded-lg px-5 py-2.5 flex items-center justify-center">
            <FaGoogle className="mr-2 text-red-600 w-4 h-4" />
            Sign in with Google
          </button>
        </div>
        <p className="text-sm text-center font-light text-gray-500">
          Don't have an account?{" "}
          <Link href="/register" className="font-medium text-purple-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

