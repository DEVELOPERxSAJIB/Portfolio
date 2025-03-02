import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  About,
  Contact,
  Hero,
  Feedbacks,
  Tech,
  Works,
} from "./components";
import { motion, useScroll } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <ToastContainer
        style={{
          zIndex: "9999",
        }}
        position="top-center"
        autoClose={3000}
      />
      <BrowserRouter>
        <div className="relative home-wrapper z-10 bg-[#02050A]">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          <About />
          <Tech />
          <Works />
          <Feedbacks />

          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
