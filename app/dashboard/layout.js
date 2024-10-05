import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header on top */}
      <header className="fixed w-full top-0 z-10 h-20">
        <Header />
      </header>

      <div className="flex flex-grow">
        {/* Sidebar on the left */}
        <aside className="w-1/4 bg-gray-100 fixed top-20 left-0 h-[calc(100vh-5rem)] z-20">
          <Sidebar />
        </aside>

        {/* Main content area next to sidebar */}
        <main className="ml-[25%] flex-grow p-8 bg-slate-100 overflow-y-auto" style={{ marginTop: '5rem' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
