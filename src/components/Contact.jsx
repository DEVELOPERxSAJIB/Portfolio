import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Sparkles } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    setLoading(true);
    if (!name || !email || !message) {
      toast.error("All feilds are required");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        "service_uflh7cb",
        "template_e8aovbv",
        {
          from_name: form.name,
          to_name: "PORTFOLIO",
          from_email: form.email,
          to_email: "expert43developer5@gmail.com",
          message: form.message,
          html: `
            <p>Sender Name : ${form.name}</p>
            <p>Sender Email : ${form.email}</p>
          `,
        },
        "GAQ_Vq4tSYF9xubIj"
      )
      .then(() => {
        setLoading(false);
        toast.success("I will get back to you as soon as possible");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ahh. something went wrong");
        setLoading(false);
      });
  };

  return (
    <div className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#09101A] p-8 rounded-2xl"
      >
        <div className="text-start lg:mb-8 mb-2 ">
          <div id="about" className="inline-block relative group">
            <h2
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
              data-aos="zoom-in-up"
              data-aos-duration="600"
            >
              Contact
            </h2>
          </div>
          <p
            className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-start gap-2"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            Get in touch
            <Sparkles className="w-5 h-5 text-purple-400" />
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-[#151C25] py-4 px-6 placeholder:text-black-300 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-[#151C25] py-4 px-6 placeholder:text-black-300 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-[#151C25] py-4 px-6 placeholder:text-black-300 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#151C24] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-black"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
