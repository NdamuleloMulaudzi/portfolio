import React from "react";
import { motion } from "framer-motion";
import "../styles/Navbar.css";
import Image from "next/image";

const links = [
  { name: "ABOUT", href: "about" },
  { name: "PROJECTS", href: "projects" },
  { name: "EXPERIENCE", href: "experience" },
  { name: "CONTACT", href: "contact" },
];

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.3 },
  }),
};

function Navbar() {
  return (
    <motion.div
      className="navbar flex justify-center"
      initial="hidden"
      animate="visible"
    >
      <div className="burger">
            <Image
                className="burger"
                src="/icons/menu.svg"
                alt="X (Twitter) Icon"
                width={55}
                height={55}
              />
            </div>
      <div className="flex justify-center items-center gap-18 px-15 py-15 text-[20px] font-bold">
        {links.slice(0, 2).map((link, index) => (
          <React.Fragment key={link.name}>
            <motion.a
              href={link.href}
              custom={index}
              variants={linkVariants}
              whileHover={{ scale: 1.1, color: "#CE5A5A" }}
            >
              {link.name}
            </motion.a>
            <motion.div
              className="dot bg-[#5E2BFF] border w-[5px] h-[5px] rounded-[16px]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.3 + 0.2 }}
            ></motion.div>
          </React.Fragment>
        ))}

<       div className="relative initials">
          <motion.p
            className="header-logo text-[40px] font-bold text-white relative z-10"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            N
          </motion.p>
          <motion.p
            className="header-logo text-[40px] font-bold text-white absolute top-0 left-2"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            M
          </motion.p>
         </div>

        {links.slice(2).map((link, index) => (
          <React.Fragment key={link.name}>
            <motion.div
              className=" dot bg-[#5E2BFF] border w-[5px] h-[5px] rounded-[16px]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: (index + 2) * 0.3 + 0.2 }}
            ></motion.div>
            <motion.a
              href={link.href}
              custom={index + 2}
              variants={linkVariants}
              whileHover={{ scale: 1.1, color: "#CE5A5A" }}
            >
              {link.name}
            </motion.a>
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}

export default Navbar;
