import "./Hero.scss";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import hero from "../../public/hero/hero.png";
import HeroButton from "./HeroButton";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <div className="hero-area overflow-hidden relative bg-[#09101A]">
        <div className="px-[5%] sm:px-[5%] lg:px-[10%]">
          <div className="hero-content w-full flex justify-between">
            <section className="h-screen flex items-center gap-1">
              <div className="flex flex-row items-start gap-5">
                <div>
                  <h1 className={`${styles.heroHeadText} text-white`}>
                    Hi, I&rsquo;m{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                      <Typewriter
                        words={[
                          "Md Sajib",
                          "a Designer",
                          "Developer",
                          "& Coder .",
                        ]}
                        loop
                        typeSpeed={75}
                        deleteSpeed={30}
                        delaySpeed={1500}
                      />{" "}
                    </span>
                  </h1>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                    className={`mt-2 text-[#fff]`}
                  >
                    Enthusiastic Software Developer. <br /> Proficient in
                    full-stack development, particularly the MERN Stack.
                  </p>
                  <div className="social-icons mt-[30px]">
                    <a
                      href="https://www.facebook.com/Md.SaJib.Raajput/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="group relative p-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                        <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                          <FaFacebookF className="w-5 h-5 text-gray-100 group-hover:text-white transition-colors" />
                        </div>
                      </button>
                    </a>
                    <a
                      target="_black"
                      href="https://www.linkedin.com/in/mdsajibshikder/"
                    >
                      <button className="group relative p-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                        <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                          <FaLinkedinIn className="w-5 h-5 text-gray-100 group-hover:text-white transition-colors" />
                        </div>
                      </button>
                    </a>
                    <a
                      target="_black"
                      href="https://twitter.com/MdSaJibShikder9"
                    >
                      <button className="group relative p-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                        <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                          <FaTwitter className="w-5 h-5 text-gray-100 group-hover:text-white transition-colors" />
                        </div>
                      </button>
                    </a>
                  </div>

                  <div className="flex gap-5 hero-buttons">
                    <HeroButton title={"Download CV"} icon={"cv"} />
                    <HeroButton id="projects" title={"Contact"} icon={"talk"} />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <img className="shadow forDis" src={hero} alt="" />
            </section>
          </div>
        </div>
        <div className="absolute xs:bottom-10 w-full flex justify-center items-center">
          <div className="mx-auto overflow-hidden">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#333] flex justify-center items-center p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-[#666]"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
