"use client";
import { ClipboardPenLine, HandCoins, Home, PiggyBank, Plus, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({showSidebar, setShowSidebar}) {
  const pathname = usePathname();
  const sidebarLinks = [
    {
      title: "Home",
      href: "/dashboard/home",
      icon: Home,
    },
    {
      title: "Income",
      href: "/dashboard/income",
      icon: HandCoins,
    },
    {
      title: "Expenses",
      href: "/dashboard/expense",
      icon: ShoppingCart,
    },
    {
      title: "Budgets",
      href: "/dashboard/budget",
      icon: ClipboardPenLine,
    },
    {
      title: "Savings",
      href: "/dashboard/savings",
      icon: PiggyBank,
    }
  ];

  return (
    <div className={`flex flex-col items-center justify-center p-4 bg-purple-300 rounded-lg overflow-auto w-96 ${showSidebar ? 'lg:block' : 'hidden lg:block'}`}>
      <button className='lg:hidden bg-purple-950 p-2 rounded-full' onClick={() => setShowSidebar(false)}>
        <X className='h-6 w-6 text-white' />
      </button>
      <div className="flex-grow flex flex-col w-full">
        {sidebarLinks.map((link, index) => {
          const { title, href, icon: Icon } = link;
          // Check if the current pathname matches the href to highlight the active link
          const isActive = pathname === href;

          return (
            <div key={index} className="flex items-center justify-between gap-4 p-4 rounded-full mb-4 w-full">
              <Link
                href={href}
                className={`flex items-center gap-4 ${
                  isActive ? 'bg-purple-700 text-white' : 'bg-purple-200'
                } w-full p-4 rounded-full`}
                onClick={() => setShowSidebar(false)}
              >
                <Icon className="w-6 h-6" />
                {title}
              </Link>
              {title !== "Home" && (
                <button
                  onClick={() => window.location.href = `${href}/new`}
                  className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-full text-white hover:bg-purple-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}
