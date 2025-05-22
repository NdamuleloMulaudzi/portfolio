import React from "react";
import Image from "next/image";

function SkillItem({ name, icon }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Image
        width={55}
        height={55}
        src={icon}
        alt={name}
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
      />
      <span className="text-xs sm:text-sm md:text-base text-white font-medium text-center">
        {name}
      </span>
    </div>
  );
}

export default SkillItem;
