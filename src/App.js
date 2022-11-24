import React, { useEffect } from "react";
import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ContactMe from "./components/contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-1 sm:px-5 dark:bg-gray-100">
      <div
        class="flex h-screen justify-center items-center"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}
export default App;
