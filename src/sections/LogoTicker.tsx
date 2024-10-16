"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quantomLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={acmeLogo} alt="acme" className="logo-ticket-image" />
            <Image
              src={quantomLogo}
              alt="quantomLogo"
              className="logo-ticket-image"
            />
            <Image
              src={echoLogo}
              alt="echoLogo"
              className="logo-ticket-image"
            />
            <Image
              src={celestialLogo}
              alt="celestialLogo"
              className="logo-ticket-image"
            />
            <Image
              src={pulseLogo}
              alt="pulseLogo"
              className="logo-ticket-image"
            />
            <Image
              src={apexLogo}
              alt="apexLogo"
              className="logo-ticket-image"
            />

            {/* extra for animation */}
            <Image src={acmeLogo} alt="acme" className="logo-ticket-image" />
            <Image
              src={quantomLogo}
              alt="quantomLogo"
              className="logo-ticket-image"
            />
            <Image
              src={echoLogo}
              alt="echoLogo"
              className="logo-ticket-image"
            />
            <Image
              src={celestialLogo}
              alt="celestialLogo"
              className="logo-ticket-image"
            />
            <Image
              src={pulseLogo}
              alt="pulseLogo"
              className="logo-ticket-image"
            />
            <Image
              src={apexLogo}
              alt="apexLogo"
              className="logo-ticket-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
