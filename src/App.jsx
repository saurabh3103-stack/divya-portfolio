import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Preloader from './Component/Preloader';
import MainSlider from './Component/MainSlider';
import BrandSection from './Component/BrandSection';
import Service from './Component/Service';
import Marquee from './Component/Marquee';
import About from './Component/About';
import LatestProject from './Component/LatestProject';
import SkillsTool from './Component/SkillsTool';
import ClientReview from './Component/ClientReview';
import PricingSection from './Component/PricingSection';
import FooterSection from './Component/FooterSection';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Preloader />
      <Navbar />
      <div
        id="smooth-wrapper"
        className="tp-page-wrapper theme-bg"
        style={{ backgroundImage: "url('../src/assets/img/bg/distort-bg.png')" }} // Corrected background
      >
        <div id="smooth-content">
          <main>
            <MainSlider />
            <BrandSection />
            <Service />
            <Marquee />
            <About />
            <LatestProject />
            <SkillsTool />
            <ClientReview />
            <PricingSection />
          </main>
          <FooterSection />
        </div>
      </div>
    </>
  );
}

export default App;
