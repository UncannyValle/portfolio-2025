"use client";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/app/lib/constants/links";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.3 }}
      animate={{ opacity: 1, scale: 1.0 }}
      transition={{ type: "spring" }}
      className="hero flex min-h-screen flex-col items-center justify-center p-8"
    >
      <h1 className="inline text-5xl lg:text-7xl">
        Hi, Everyone! I&apos;m Julian
        <div className="inline-block animate-bounce">👋🏼</div>
      </h1>
      <p className="py-8 lg:text-2xl">
        Full-Stack Developer Specializing in Frontend Migrations, AI
        Integrations & Seamless User Experiences
      </p>
      <div>
        <a
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-7 inline-block"
        >
          <FaGithub className="text-4xl transition ease-in hover:scale-110 hover:text-purple-500" />
        </a>
        <a
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-7 inline-block"
        >
          <FaLinkedin className="text-4xl transition ease-in hover:scale-110 hover:text-purple-500" />
        </a>
        <a
          href={SOCIAL_LINKS.EMAIL}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-7 inline-block"
        >
          <FaEnvelope className="text-4xl transition ease-in hover:scale-110 hover:text-purple-500" />
        </a>
      </div>
      <div className="my-8 flex flex-col items-center md:flex-row">
        <Link
          href="/#contact"
          type="button"
          className="min-w-[210px] rounded-full bg-purple-500 px-8 py-4 text-center uppercase text-white transition hover:scale-110 hover:bg-purple-800 md:mr-8"
        >
          Contact Me
        </Link>
        <Link
          href={SOCIAL_LINKS.RESUME}
          target="_blank"
          rel="noreferrer noopener"
          type="button"
          className="mt-8 min-w-[210px] rounded-full bg-purple-500
             px-8 py-4 text-center uppercase text-white transition hover:scale-110 hover:bg-purple-800 md:mt-0"
        >
          View my Resume
        </Link>
      </div>
    </motion.div>
  );
};
