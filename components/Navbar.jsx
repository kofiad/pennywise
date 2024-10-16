"use client"
import Loading from '@/app/loading';
import generateInitials from '@/lib/generateInitials';
import { Menu, X } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import React, { useState } from 'react'
import ThemeLink from './ThemeLink';

export default function Navbar() {
    const {data: session, status} = useSession();
    console.log(session);
    const [show, setShow] = useState(false);
    if (status === 'loading'){return <Loading />};
    console.log(status);
    const initials = generateInitials(session?.user?.name);

    return (
      <>
          <header className="bg-purple-900 fixed top-0 right-0 w-full left-0 h-16 flex items-center justify-between px-6 md:px-16 text-slate-50 z-50 shadow-lg">
              <Link className="font-bold text-xl md:text-3xl" href="/">PennyWise</Link>

              {/* Full Navigation for large screens */}
              <nav className="hidden lg:flex items-center gap-6">
                  <Link className="hover:text-purple-300 transition duration-300" href="/">Features</Link>
                  <Link className="hover:text-purple-300 transition duration-300" href="/">FAQs</Link>
                  <Link href="/dashboard/home/">Dashboard</Link>
              </nav>

              {/* User actions */}
              {status === "authenticated" ? (
                  <div className="hidden lg:flex items-center gap-6">
                      <div className="flex items-center space-x-4">
                          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                              <span className="font-medium text-gray-600 dark:text-gray-300">{initials}</span>
                          </div>

                          <div className="font-medium dark:text-white">
                              <div>{session.user.name}</div>
                              <div className="text-sm text-slate-50 dark:text-slate-400">{session.user.email}</div>
                          </div>
                      </div>

                      <button onClick={() => signOut()} type="button" className="text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-8 py-2.5">
                          Sign Out
                      </button>
                  </div>
              ) : (
                  <div className="hidden lg:flex items-center gap-6">
                      <Link className="hover:text-purple-300 transition duration-300" href="/login">Sign in</Link>
                      <ThemeLink className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-300" title="Register" href="/register" />
                  </div>
              )}

              {/* Hamburger menu for medium and small screens */}
              <button onClick={() => setShow(!show)} className="lg:hidden">
                  {show ? <X className="text-3xl" /> : <Menu className="text-3xl" />}
              </button>
          </header>

          {/* Mobile menu */}
          <div className={`${show ? "block" : "hidden"} lg:hidden fixed w-64 bg-slate-800 bg-opacity-95 h-screen right-0 z-50 top-0 p-4 text-slate-50 transition-transform transform ${show ? "translate-x-0" : "translate-x-full"} duration-300`}>
              <div className="flex justify-between items-center mb-10">
                  <h2 className="font-bold text-xl">ProCura</h2>
                  <button onClick={() => setShow(false)}>
                      <X className="text-2xl" />
                  </button>
              </div>

              <nav className="flex flex-col items-start gap-4 mb-10">
                  <Link className="hover:text-purple-300 transition duration-300" href="/">Features</Link>
                  <Link className="hover:text-purple-300 transition duration-300" href="/">FAQs</Link>
                  <Link href="/dashboard/home/overview">Dashboard</Link>
              </nav>

              {status === "authenticated" ? (
                  <div className="flex flex-col gap-4 items-center">
                      <div className="flex items-center gap-4">
                          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                              <span className="font-medium text-gray-600 dark:text-gray-300">{initials}</span>
                          </div>

                          <div className="font-medium dark:text-white">
                              <div>{session.user.name}</div>
                              <div className="text-sm text-slate-50 dark:text-slate-400">{session.user.email}</div>
                          </div>
                      </div>

                      <button onClick={() => signOut()} type="button" className="w-full text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-2.5">
                          Sign Out
                      </button>
                  </div>
              ) : (
                  <div className="flex flex-col gap-4 items-center">
                      <Link className="hover:text-purple-300 text-center transition duration-300" href="/login">Sign in</Link>
                      <ThemeLink className="w-full bg-purple-600 hover:bg-purple-700 focus:ring-purple-300" title="Register" href="/register" />
                  </div>
              )}
          </div>
      </>
  );
}
