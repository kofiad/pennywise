import Header from "@/components/Dashboard/Header";
import Sidebar from "@/components/Dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header on top */}
      <header className="bg:purple-200 fixed w-full top-0 h-20">
        <Header />
      </header>

      <div className="flex flex-grow">
        {/* Sidebar on the left */}
        <aside className="w-1/4 fixed top-20 z-20">
          <Sidebar />
        </aside>

        {/* Main content area next to sidebar */}
        <main className="ml-[30%] flex-grow overflow-hidden m-8 rounded-lg" style={{ marginTop: '5rem' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
