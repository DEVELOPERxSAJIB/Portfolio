import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { Sparkles } from "lucide-react";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <Tilt
    options={{
      reverse: false,
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-[#fff] p-10 rounded-3xl xs:w-[320px] w-full shadow-card2 h-[400px]"
    >
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-black-100 tracking-wider text-[18px]">
          {testimonial}
        </p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-black-100 font-medium text-[16px]">
              <span className="text-black-50">@</span> {name}
            </p>
            <p className="mt-1 text-black-100 text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-[#151C25] rounded-[20px]`}>
      <div
        className={`bg-[#09101A] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          
          <div className="text-center lg:mb-8 mb-2 px-[5%]">
            <div id="about" className="inline-block relative group">
              <h2
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                data-aos="zoom-in-up"
                data-aos-duration="600"
              >
                Testimonials
              </h2>
            </div>
            <p
              className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              What others say
              <Sparkles className="w-5 h-5 text-purple-400" />
            </p>
          </div>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} rounded flex flex-wrap gap-7`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testi");
