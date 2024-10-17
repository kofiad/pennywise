import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import Steps from "@/components/Steps";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-purple-900">
      <Navbar/>
      <Hero/>
      <Steps/>
      <Features/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
