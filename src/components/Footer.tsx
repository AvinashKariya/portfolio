"use client";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaRedditAlien,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/your-profile",
      icon: <FaLinkedinIn className="w-5 h-5" />,
      hoverColor: "hover:text-[#0A66C2]",
    },
    {
      name: "GitHub",
      url: "https://github.com/your-username",
      icon: <FaGithub className="w-5 h-5" />,
      hoverColor: "hover:text-[#24292e]",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/your-username",
      icon: <FaInstagram className="w-5 h-5" />,
      hoverColor: "hover:text-[#E4405F]",
    },
    {
      name: "Reddit",
      url: "https://reddit.com/user/your-username",
      icon: <FaRedditAlien className="w-5 h-5" />,
      hoverColor: "hover:text-[#FF4500]",
    },
  ];

  return (
    <footer className="py-6 px-4 md:px-12 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 ${link.hoverColor} transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm text-center">
            © {new Date().getFullYear()} Avinash Kariya. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
