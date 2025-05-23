import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navbar.css";
import Image from "next/image";

const links = [
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
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
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <>
      <motion.div
        className="navbar flex justify-center"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="burger"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {sidebarOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  className="burger-icon"
                  src="/icons/close-menu.svg"
                  alt="Close Icon"
                  width={55}
                  height={55}
                />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  className="burger-icon"
                  src="/icons/menu.svg"
                  alt="Menu Icon"
                  width={55}
                  height={55}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center items-center gap-18 px-15 py-15 text-[20px] font-bold">
          {links.slice(0, 2).map((link, index) => (
            <React.Fragment key={link.name}>
              <motion.a
                href={link.href}
                custom={index}
                variants={linkVariants}
                whileHover={{ scale: 1.1}}
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

          <div className="relative initials">
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
                whileHover={{ scale: 1.1 }}
              >
                {link.name}
              </motion.a>
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="overlay fixed inset-0 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            ></motion.div>

            {/* Sidebar */}
            <motion.div
              className="sidebar fixed top-0 left-0 w-64 h-full bg-gray-900 text-white p-6 shadow-lg"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="block text-xl"
                      whileHover={{ scale: 1.1}}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
