import { Link } from "react-router-dom";
import { menu, close } from "../assets";
import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div
        className={`w-full py-5 fixed flex items-center justify-between md:block top-0 z-20 bg-[#141C27] shadow`}
      >
        <div className="px-[5%] sm:px-[5%] lg:px-[10%]">
          <div className="flex justify-between items-center">
            <Link
              to={"/"}
              onClick={() => {
                setActive(""), window.scrollTo(0, 0);
              }}
            >
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] uppercase text-[36px] font-bold logo-font cursor-pointer">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] logo-font">D</span>Sa
              </p>
            </Link>
            <ul className="items-center list-none hidden sm:flex flex-row gap-6">
              {navLinks.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => setActive(item.title)}
                    className={`${
                      active === item.title
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] font-semibold"
                        : "text-[#fff] font-semibold"
                    }`}
                  >
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                );
              })}
              <li className="font-semibold py-1 px-1 text-[#02050A] transition-opacity rounded">
                <div className="buttons">
                  <button
                    style={{ margin: 0, width: "100px", height: "40px" }}
                    className="btn-hover color-1"
                  >
                    <a
                      style={{ margin: 0 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/mdsajibshikder/"
                    >
                      Hire Me
                    </a>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="sm:hidden flex justify-end pr-5">
          <img
            style={{
              background: "#6366f1",
              padding: "6px",
              borderRadius: "5px",
            }}
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#141C27]  absolute right-0 top-14 my-2 min-w-[140px] rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(item.title);
                    }}
                    className={`${
                      active === item.title
                        ? "text-black, font-[18px]"
                        : "text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                    }`}
                  >
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                );
              })}
              <li
                style={{
                  backgroundColor:
                    "linear-gradient(180deg, #FFD700 1.9%, rgb(50, 255, 126) 97.5%)",
                }}
                className="font-semibold py-1 px-5 rounded border-2"
              >
                <a href="https://www.upwork.com/freelancers/~01baa01d9327439663">
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
