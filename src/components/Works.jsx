import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Sparkles } from "lucide-react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" bg-[#09101A] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="flex flex-col gap-1">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="green-pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="blue-gradient shadow-lg w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <HiOutlineStatusOnline size={22} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className=" text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-slate-100 text-[14px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="text-center lg:mb-8 mb-2 px-[5%]">
          <div id="about" className="inline-block relative group">
            <h2
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
              data-aos="zoom-in-up"
              data-aos-duration="600"
            >
              My Portfolio
            </h2>
          </div>
          <p
            className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            Explore my journey through projects
            <Sparkles className="w-5 h-5 text-purple-400" />
          </p>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
