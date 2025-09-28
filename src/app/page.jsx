import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import WorkSection from "../components/WorkSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactForm />
      <Footer />
    </>
  );
}
