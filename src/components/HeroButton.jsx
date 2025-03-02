import { HiOutlineDownload } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import resume from "../../src/cv/Md_Sajib_Shikder.pdf"

const HeroButton = ({ title, icon, id }) => {
  return (
    <div className="hero-button">
      <div className="buttons">
        {icon === "cv" && (
          <a
            href={resume}
            download={"Md_Sajib_Shikder.pdf"}
            className="flex justify-center items-center gap-2 cv-down btn-hover color-1"
          >
            <span className="text-[#fff]">{title}</span>
            <span>
              <HiOutlineDownload className="text-white" />
            </span>
          </a>
        )}
        {icon === "talk" && (
          <a
          data-aos="fade-up"
          href={`#${id}`}
          data-aos-duration="1000"
          className="w-full lg:w-auto sm:px-6 py-2 sm:py-4 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10"
        >
          <FiMail size={25} className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
        </a>
        )}
      </div>
    </div>
  );
};

export default HeroButton;
