"use client";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Animate from "./utils/motion";

export default function Home() {
  const createCounter = (init) => {
    var value = init;
    function increment() {
      return value + 1;
    }
  };

  const counter = createCounter(5);
  let result = counter.increment();
  console.log(result);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <Animate xpos={-300}>
          <AboutSection />
        </Animate>

        <Projects />

        <Animate ypos={300}>
          <EmailSection />
        </Animate>
        <Footer />
      </div>
    </main>
  );
}
