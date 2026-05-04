import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Toolkit from "./components/Toolkit";
import Experience from "./components/Experience";
import Writing from "./components/Writing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./i18n";





function App() {
  return (
    <div className="bg-[#f7f7f5] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Toolkit />
      <Experience />
      <Writing />
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;