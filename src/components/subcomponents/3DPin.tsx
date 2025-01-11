"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";
import { useMediaQuery } from "react-responsive";

export const PinContainer = ({
  children,
  title,
  href,
  orgName,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  orgName?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const onMouseEnter = () => {
    if (!isMobile) {
      setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    }
  };
  const onMouseLeave = () => {
    if (!isMobile) {
      setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    }
  };

  return (
    <a
      className={cn(
        "relative group/pin z-50  cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: isMobile 
              ? "translate(-50%,-50%) rotateX(40deg) scale(0.8)" 
              : transform,
          }}
          className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} orgName={orgName} />
    </a>
  );
};

export const PinPerspective = ({
  title,
  href,
  orgName
}: {
  title?: string;
  href?: string;
  orgName?: string;
}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return (
    <motion.div className={cn(
      "pointer-events-none w-96 h-80 flex items-center justify-center z-[60] transition duration-500",
      isMobile ? "opacity-100" : "opacity-0 group-hover/pin:opacity-100"
    )}>
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-primary/5 py-0.5 px-4 ring-1 ring-secondary"
          >
            <span className="relative z-20 text-primary text-xs font-bold inline-block py-0.5">
              {orgName}
            </span>

            <span className={cn(
              "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] transition-opacity duration-500",
              isMobile ? "opacity-40" : "group-hover/btn:opacity-40"
            )}></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-cherryred/50 shadow-[0_8px_16px_rgb(255_255_255/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-cherryred/30 shadow-[0_8px_16px_rgb(255_255_255/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-cherryred/10 shadow-[0_8px_16px_rgb(255_255_255/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className={cn(
            "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-secondary/40 to-primary/40 translate-y-[14px] w-px blur-[2px]",
            isMobile ? "h-40" : "h-20 group-hover/pin:h-40"
          )} />
          <motion.div className={cn(
            "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-secondary/40 to-primary/40 translate-y-[14px] w-px",
            isMobile ? "h-40" : "h-20 group-hover/pin:h-40"
          )} />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-primary translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-primary translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
        </>
      </div>
    </motion.div>
  );
};
