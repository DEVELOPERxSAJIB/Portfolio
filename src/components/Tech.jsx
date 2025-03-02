import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { Sparkles } from "lucide-react";

const Tech = () => {
  return (
    <>
      <motion.div className="text-center mb-10" variants={textVariant()}>
        <div className="text-center lg:mb-8 mb-2 px-[5%]">
          <div id="about" className="inline-block relative group">
            <h2
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
              data-aos="zoom-in-up"
              data-aos-duration="600"
            >
              Technologies
            </h2>
          </div>
          <p
            className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            What I am working with
            <Sparkles className="w-5 h-5 text-purple-400" />
          </p>
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center mt-10 gap-1.5 max-sm:gap-2 md:gap-3 pt-3">
        {console.log(technologies.length)}
        {technologies.map((skill, index) => (
          <>
            <div
              key={index}
              className="flex flex-col hover:-translate-y-2 transition-transform duration-300 w-28 max-sm:min-w-20 items-center p-2 bg-slate-100 text-black rounded-lg shadow max-sm:items-center max-sm:gap-2"
            >
              <img src={skill.icon} alt={skill.name} width="60" height="40"  />
              <span className="text-[14px] font-normal">{skill.name}</span>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
