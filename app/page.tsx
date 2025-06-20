"use client";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

import GoToTopButton from "@/components/ui/GoToTopButton"; // import the button

// Define your navigation items here
const navItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>

      {/* Add GoToTopButton here */}
      <GoToTopButton />
    </main>
  );
};

export default Home;
