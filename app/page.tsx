import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Quiz from "@/components/Quiz";
import HowTo from "@/components/HowTo";
import Tips from "@/components/Tips";
import Tutorial from "@/components/Tutorial";
import Diagnostic from "@/components/Diagnostic";
import Profile from "@/components/Profile";
import Mitos from "@/components/Mitos";
import VetAlert from "@/components/VetAlert";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Quiz />
      <HowTo />
      <Tips />
      <Tutorial />
      <Diagnostic />
      <Profile />
      <Mitos />
      <VetAlert />
      <FinalCTA />
      <Footer />
    </>
  );
}
