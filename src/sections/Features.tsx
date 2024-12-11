"use client";
import Image from "next/image";
import ProdectImage from "@/assets/product-image.png";
// import Player from "lottie-react";
// import ClickAnimation from "../../public/assets/lottie/click.json"; 
import { motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { animate } from "motion";

const tabs = [
  {
    
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
   
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {

    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

type TabProps = {
  title: string;
  isNew: boolean;
  onClick: () => void;
  selected: boolean;
};

const FeaturesTabs = ({  title, isNew, onClick, selected }: TabProps) => {
  const Tabef = useRef<HTMLDivElement>(null);
  const XPercentage = useMotionValue(50); // Start from the center
  const YPercentage = useMotionValue(50);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${XPercentage}% ${YPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!Tabef.current || !selected) return;

    // Reset to center before animating
    XPercentage.set(0);
    YPercentage.set(0);

    // Animate the mask moving around the box
    const animationOptions: ValueAnimationTransition = {
      duration: 4, // Total animation duration
      repeat: Infinity, // Loop the animation
      ease: "linear",
      repeatType: "loop",
    };

    // Animate X and Y percentages for a smooth path around the box
    animate(XPercentage, [0, 100, 100, 0, 0] as any, animationOptions as any);
    animate(YPercentage, [0, 0, 100, 100, 0] as any, animationOptions as any);
  }, [selected]);

  const playerRef = useRef<any>(null);
  const handleTabHover = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };

  const handleTabLeave = () => {
    if (playerRef.current) {
      playerRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleTabHover}
      onMouseLeave={handleTabLeave}
      onClick={onClick}
      ref={Tabef}
      className="border border-white/15 flex relative p-2.5 rounded-xl gap-2.5 items-center lg:w-full"
    >
      {selected && (
        <motion.div
          style={{
            maskImage: maskImage,
            WebkitMaskImage: maskImage, // Ensure compatibility with WebKit browsers
          }}
          className="absolute inset-0 border border-[#A369ff] -m-px rounded-xl"
        ></motion.div>
      )}

      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        {/* <Player
          autoplay={false}
          loop={true}
          animationData={icon}
          className="size-8"
          lottieRef={playerRef}
        /> */}
        👀
      </div>
      <div className="font-medium">{title}</div>
      {isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectTabs, setselectTabs] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const bgSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index: number) => {
    setselectTabs(index);

    // Animate background position and size smoothly
    animate(backgroundPositionX, tabs[index].backgroundPositionX as any, {
      duration: 0.5,
      ease: "easeInOut",
    });
    animate(backgroundPositionY, tabs[index].backgroundPositionY as any, {
      duration: 0.5,
      ease: "easeInOut",
    });
    animate(backgroundSizeX, tabs[index].backgroundSizeX as any, {
      duration: 0.5,
      ease: "easeInOut",
    });
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto tracking-tight text-center mt-5">
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="mt-10 flex flex-col gap-3 lg:flex-row">
          {tabs.map((tab, index) => (
            <FeaturesTabs
              {...tab}
              onClick={() => handleSelectTab(index)}
              selected={selectTabs === index}
              key={tab.title}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundPosition,
              backgroundSize: bgSize,
              backgroundImage: `url(${ProdectImage.src})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};