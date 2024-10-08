"use client";
import { ClipboardPenLine, HandCoins, Home, PiggyBank, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation

export default function Sidebar() {
  const pathname = usePathname(); // Get the current pathname
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
    <div className="flex flex-col p-4 bg-purple-100 rounded-lg ml-4">
      {sidebarLinks.map((link, index) => {
        const { title, href, icon: Icon } = link;
        // Check if the current pathname matches the href to highlight the active link
        const isActive = pathname === href;

        return (
          <Link
            key={index}
            href={href}
            className={`flex items-center justify-center gap-4 p-4 rounded-full mb-4 ${
              isActive ? 'bg-purple-700 text-white' : 'bg-purple-200'
            }`}
          >
            <Icon className="w-6 h-6" />
            {title}
          </Link>
        );
      })}
    </div>
  );
}
