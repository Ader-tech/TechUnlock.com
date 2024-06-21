"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const BannerCard = ({ courses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("onsite");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-[#FFFFFF]/20 rounded-md drop-shadow-lg backdrop-blur-lg px-3 py-2 border border-gray-900">
      <div className="relative h-52">
        {courses?.map((course, index) => (
          <div
            key={index}
            className={cn("absolute inset-0 transition-opacity duration-1000", {
              "opacity-0": index !== currentIndex,
              "opacity-100": index === currentIndex,
            })}
          >
            <Image
              src={course.image}
              alt={course.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className=" flex justify-center p-3 bg-sec10 w-1/4 mx-auto rounded-xl">
        {courses?.map((course, index) => (
          <button
            key={index}
            className={cn("h-2 w-2 rounded-full mx-1 transition-colors", {
              "bg-white": index !== currentIndex,
              "bg-blue-500": index === currentIndex,
            })}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Radio group */}
      <div className="my-4 px-3 grid gap-y-3">
        <div className="flex items-center space-x-5 font-semibold">
          <Check size={18} color="#D92D20" />
          <p className="text-sec10">Access to readable materials</p>
        </div>
        <div className="flex items-center space-x-5 font-semibold">
          <Check size={18} color="#D92D20" />
          <p className="text-sec10">Constant updates via mails</p>
        </div>
        <div className="flex items-center space-x-5 font-semibold">
          <Check size={18} color="#D92D20" />
          <p className="text-sec10">Continuous learning</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4 px-4 pb-5">
        <Button>Apply Now</Button>
        <Button variant="outline">Save for Later</Button>
      </div>
    </div>
  );
};
