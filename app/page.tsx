import StickyHeader from "./components/stickyHeader";
import HeroSection from "./components/heroSection";
import Projects from "./components/projects";
import Contact from "./components/contact";

import { Lato } from 'next/font/google';
import Footer from "./components/footer";

const lato = Lato({
  weight: ['100', '300', '400', '700', '900']
});

export default function Home() {
  return (
    <div id="main-container" className={`${lato.className}`}>
      <StickyHeader />
      <HeroSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
