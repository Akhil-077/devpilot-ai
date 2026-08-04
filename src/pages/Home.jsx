import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Stats from "../components/Stats/Stats";
import Testimonials from "../components/Testimonials/Testimonials";
import Pricing from "../components/Pricing/Pricing";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;