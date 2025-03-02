import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  bs,
  wolmart,
  cineplex,
  blogapp,
  admin,
  posapp,
  myfolio,
  html,
  css,
  javascript,
  typescript,
  babeljs,
  redux,
  nextjs,
  mui,
  express,
  graphql,
  postgreSQL,
  nextauth,
  firebase,
  git,
  postman,
  vscode,
  famclinic,
  proposedoffer,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testi",
    title: "Reviews",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Back End Developer",
    icon: backend,
  },
  {
    title: "Technology Explorer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "BabelJS",
    icon: babeljs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bs,
  },
  {
    name: "Material",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgreSQL,
  },
  {
    name: "Next Auth",
    icon: nextauth,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
];

const testimonials = [
  {
    testimonial:
      "It is not my first time buying this service from him and as usual perfect job and would definitely order from him again.",
    name: "Mr Kat",
    designation: "CFO",
    company: "Nanokat NL",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Very good work I am really happy how well he done everthing I would recommend him for any projects",
    name: "Nwpropertyoffer",
    designation: "COO",
    company: "Fiver marketplace",
    image: "https://cdn-icons-png.flaticon.com/512/13078/13078067.png",
  },
  {
    testimonial:
      "After Sajib optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "The seller has great understanding of my needs. Everything was great. I recommend it.",
    name: "Mr Kat",
    designation: "COO",
    company: "Nanokat NL",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "E-commerce Application",
    description: `It's an all-in-one Ecommerce and Inventory Management System for Discover Products, Making a
      purchase, Managing carts, Execute secure payments, and effortlessly completing checkouts 
      MongoDB, Node.js, Express.js, React.js, Redux, and JavaScript
      `,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wolmart,
    source_code_link: "https://github.com/DEVELOPERxSAJIB/Bigbazar-ecommerce",
    live_link: "https://finalecommerce-chi.vercel.app/",
  },
  {
    name: "Cineplex Book a Show",
    description: `An Online Ticket Booking Application as well as purchase tickets, reserve seats for your favorite
      shows, and even create personalized Halls and Theatres - Node Js, Express Js, React Js, Mongo DB, Stripe, RTK, Ant Design,
      Bootstrap, CSS & HTML`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: cineplex,
    source_code_link: "https://github.com/DEVELOPERxSAJIB/BookingSystem",
    live_link: "https://bookingsystem-tau.vercel.app/login",
  },
  {
    name: "BlogSphare",
    description: `BlogSphare app is a modern blogging platform built with Next.js, Prisma, GraphQL, and PostgreSQL. Users can register with NextAuth, create and bookmark posts, and explore other profiles.Also have a litte dashboard admin can control users and posts`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: blogapp,
    source_code_link: "https://github.com/DEVELOPERxSAJIB/blog-app",
    live_link: "https://blog-application-five-eta.vercel.app",
  },
  {
    name: "Fam Clinic",
    description: `This app is built with React, featuring email integration via EmailJS, real-time data fetching from JSON, and a toaster for notifications. It includes pages like Home, About Us, Services, and Pricing, providing a seamless user experience.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: famclinic,
    source_code_link: "https://github.com/DEVELOPERxSAJIB/FamClinic",
    live_link: "https://clinic-application-design-five.vercel.app/",
  },
  {
    name: "Propossed Offer",
    description: `Proposed Offer is a React-based property selling platform that streamlines real estate transactions. It features React Router for navigation, Formik & Yup for form validation, and EmailJS for seamless email communication.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: proposedoffer,
    source_code_link: "https://propossedoffer.vercel.app/",
    live_link: "https://github.com/DEVELOPERxSAJIB/Propossedoffer",
  },
  {
    name: "Portfolio Website",
    description: `This portfolio website is built with React and features React Router for smooth navigation, React Tilt for interactive effects, and Formik & Yup for robust form validation. It includes EmailJS, providing a dynamic and engaging way to showcase the client’s work`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/DEVELOPERxSAJIB/my-portfolio",
    live_link: "https://developersajib.vercel.app/",
  },
  {
    name: "Myfolio",
    description: `Myfolio is an interactive portfolio built with React and Three.js, combining sleek design with immersive 3D visuals. It showcases my skills, projects, and expertise in web development with engaging animations and a seamless user experience. `,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: myfolio,
    source_code_link: "https://github.com/DEVELOPERxSAJIB/my-portfolio",
    live_link: "https://github.com/DEVELOPERxSAJIB/Portfolio",
  },
];

export { services, technologies, testimonials, projects };
