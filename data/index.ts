export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building new Web Projects",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "LiveDocs",
    des: "Built with Next.js to handle the user interface, Liveblocks for real-time features and styled with TailwindCSS, LiveDocs is a clone of Goole Docs.",
    img: "/livedocs.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "c.svg"],
    link: "https://live-docs-mammadovs.vercel.app/",
  },
  {
    id: 2,
    title: "CompStore - Computer Shopping Website",
    des: "This Computer Shopping Website is a front-end only e-commerce platform for buying computers.",
    img: "/compstore.png",
    iconLists: ["/html.svg", "/css.svg", "/javascript.svg"],
    link: "https://github.com/NihadMammadov23/compstore",
  },
  {
    id: 3,
    title: "Jarvis AI Assistant",
    des: "Jarvis AI Assistant is a powerful, voice-controlled personal assistant built with Python.",
    img: "/jarvis.png",
    iconLists: ["/python.svg", "/api.svg"],
    link: "https://github.com/NihadMammadov23/jarvis",
  },
  {
    id: 4,
    title: "Chess Master",
    des: "Chess Master is a comprehensive chess application built in Java.",
    img: "/chess.jpg",
    iconLists: ["/java.svg", "/ai.svg"],
    link: "https://github.com/NihadMammadov23/chess",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineering",
    desc: "Development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "Worked on a Java (Spring Boot) application, focusing on APIs and database integration.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Scripting",
    desc: "Automated tasks using Python, improving efficiency and reducing manual work.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 4,
    title: "Network Administration",
    desc: "Managed and configured network devices, ensuring optimal performance and security.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/NihadMammadov23",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/nihad_mammadow",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/nihadmammadov/",
  },
  {
    id: 4,
    img: "/insta.svg",
    url: "https://www.instagram.com/nihad.bat/",
  },
];
