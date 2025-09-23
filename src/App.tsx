import { Helmet } from "react-helmet-async";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Modules from "./components/sections/Modules";
import HowItWorks from "./components/sections/HowItWorks";
import Benefits from "./components/sections/Benefits";
import Screenshots from "./components/sections/Screenshots";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>
          MultiVision Report - AI Destekli Tıbbi Görüntüleme Platformu
        </title>
        <meta
          name="description"
          content="Yapay zeka destekli tıbbi görüntüleme raporlama platformu. Radyoloji, kardiyoloji ve iç hastalıklar için gerçek zamanlı konuşma tanıma ve otomatik rapor oluşturma."
        />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Features />
          <Modules />
          <HowItWorks />
          <Benefits />
          <Screenshots />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
