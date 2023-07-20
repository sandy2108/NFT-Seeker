import Image from "next/image";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { featuresLinks } from "@/Constants";
import Link from "next/link";

const Card = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      {featuresLinks.map((feature, index) => (
        <div
          key={index}
          className={`w-[350px] h-[300px] my-5 rounded-2xl p-4  ${
            hoveredIndex === index ? "border-2 border-blue-400" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="gap-2">
            <div>
              <Image
                src={feature.image}
                height={60}
                width={60}
                className="rounded-2xl p-1"
              />
            </div>
            <div className="mt-4">
              <h1 className="font-bold text-black text-[22px]">
                {feature.title}
              </h1>
            </div>
          </div>
          <div className="my-2">
            <div className="min-h-[80px]">{feature.description}</div>
            {hoveredIndex === index && (
              <div>
                <Link href="/" className="my-2 flex">
                  <h1 className="my-2 text-black font-extrabold">
                    Get Started.{" "}
                  </h1>
                  <BsArrowRight className="mt-3 ml-2" />
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
