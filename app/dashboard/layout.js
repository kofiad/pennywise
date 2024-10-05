import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({children}){
  return (
    <div className='flex'>
      <Header/>
      <main className="transition-all duration-300 mt-60 w-full bg-slate-100 overflow-x-hidden">
       <Sidebar />
        {children}
      </main>
    </div>
  )
}