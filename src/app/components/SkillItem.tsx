import React from "react";
import Image from "next/image";

function SkillItem({ name, icon }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Image width={55} height={55} src={icon} alt={name} className="w-16 h-16 object-contain" />
      <span className="text-white text-sm font-medium">{name}</span>
    </div>
  );
}

export default SkillItem;
