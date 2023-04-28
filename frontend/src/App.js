import "./App.css";
import ContactSection from "./Conponents/ContactSection/ContactSection";
import Footer from "./Conponents/Footer/Footer";
import Header from "./Conponents/Header/Header";
import HeroSection from "./Conponents/HeroSection/HeroSection";
import ServicesSection from "./Conponents/ServiceSection/ServiceSection";
import TestimonialsSection from "./Conponents/TestimonialsSection/TestimonialsSection";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="contacts" element={<ContactSection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
