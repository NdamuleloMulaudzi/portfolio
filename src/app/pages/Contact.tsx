import React from "react";
import Image from "next/image";
import ContactForm from "../components/ContactForm";  // Import the ContactForm component
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page min-h-screen relative">
     
  

      <div className="container mx-auto px-6 py-12 text-white relative z-10">
        <div className="contact-header text-center mb-8">
          <div className="project-header bg-[#CE5A5A] w-[350px] h-[58px] rounded-lg shadow-lg xs:mx-auto flex items-center justify-center">
            <h2 className="text-white text-[90px] font-bold relative top-7 left-30">Contact</h2>
          </div>
          
        </div>

        <div className="contact-content flex flex-col md:flex-row items-center gap-10 mt-20">
          {/* Wrapper div with relative positioning */}
          <div className="contact-image-wrapper relative w-full md:w-1/3">
            <Image
              src="/10661.jpg"
              alt="Contact Me"
              width={455}
              height={455}
              className="l shadow-lg mx-auto"
            />
            {/* Positioned text over the image */}
            <p className="text-[30px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-gray-300 mt-16 font-semibold z-20">
              I'm always open to new opportunities. Get in touch with me!
            </p>
          </div>

          <div className="contact-details text-center md:text-left md:w-2/3">
            <div className="contact-form mt-8">
              <ContactForm />
            </div>

            <div className="contact-info mt-8 text-lg text-gray-200">
              <p className="leading-relaxed">You can also contact me directly at:</p>
              <p className="mt-2 font-bold">Email: ndamulel.mulaudzi@gmail.com</p>
              <p className="mt-2 font-bold">Phone: +27665523573</p>
            </div>

            <div className="orange_line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
