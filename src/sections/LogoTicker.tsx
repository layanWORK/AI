"use client"
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";
import celestialLogo from "@/assets/logo-celestial.png";
import { motion  } from "motion/react";
export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className=" container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none ">
            <h2>Trusted by the world’s most innovative teams</h2>
          </div>
          <div className="  flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] ">
            <motion.div className=" flex flex-none gap-14 pr-14 translate-x-1/2 "
            initial={{ translateX: '-50%'}}
             animate={{
              translateX: '0',
            }} 
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear"
    
            }}
            >
              {[
                acmeLogo,
                celestialLogo,
                pulseLogo,
                echoLogo,
                apexLogo,
                quantumLogo,
                acmeLogo,
                celestialLogo,
                pulseLogo,
                echoLogo,
                apexLogo,
                quantumLogo,
              ].map((logo, index ) => (
                <img key={`${logo.src }+ ${index}`} src={logo.src} className=" h-6 w-auto" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
