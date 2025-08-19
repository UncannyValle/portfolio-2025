"use client";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const AboutMe = () => {
  return (
    <div className="container overflow-hidden">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 2 }}
        className="mb-8 flex w-full flex-wrap items-center p-8 pt-20"
        id="about-me"
      >
        <div className="mx-auto hidden lg:inline-block lg:w-1/3 ">
          <DotLottieReact src="/lotties/coder2.lottie" />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-6xl">A bit about me</h2>
          <ul className="my-4 text-xl"></ul>
        </div>
        <div className="visible mx-auto lg:hidden lg:w-1/2 ">
          <DotLottieReact src="/lotties/coder2.lottie" />
        </div>
      </motion.div>
    </div>
  );
};
