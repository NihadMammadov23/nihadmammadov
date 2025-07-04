"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <Image
                    src="/bg.png"
                    alt="bgimg"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 1024px) 100vw, 100%"
                    priority
                  />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 80vw, 24rem"
                  priority
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${index * 8}px)`,
                        zIndex: `${100 - index}`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={`icon-${index}`}
                        className="p-2"
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
