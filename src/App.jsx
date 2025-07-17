import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Progress from "./sections/Progress";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import { mySocials } from "./constants";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Progress />
      <Certificates />
      <Contact />
      <Footer/>
      {/* Social Media Vertical Bar */}
      <div className="fixed bottom-5 left-5 flex flex-col gap-3 z-50">
        {mySocials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target={social.name === "Resume" ? undefined : "_blank"}
            rel={social.name === "Resume" ? undefined : "noopener noreferrer"}
            title={social.name}
            download={social.name === "Resume" ? true : undefined}
          >
            <img src={social.icon} alt={social.name} className="w-7 h-7 hover:scale-110 transition-transform duration-200" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
