"use client";
import React from "react";
import { ResumeData } from "../../app/resume/resumeData";
import clsx from "clsx";
import { motion } from "framer-motion";
import { DynamicIcon } from "@ulld/icons";

interface ResumeProjectItemProps {
  dir: "right" | "left";
  item: ResumeData["projects"][number];
  index: number;
  initialDelay: number;
}

const ResumeProjectItem = ({
  dir,
  item,
  index,
  initialDelay,
}: ResumeProjectItemProps) => {
  const textClass = dir === "right" ? "min-[740px]:text-right" : "text-left";

  const x = dir === "right" ? 100 : -100;

  return (
    <div
      className={clsx(
        "w-full flex flex-col justify-center items-start",
        dir === "right" && "min-[740px]:items-end",
      )}
    >
      <motion.h3
        className={clsx("font-semibold text-lg", textClass)}
        initial={{
          x,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            delay: initialDelay,
          },
        }}
      >
        {item.title}
      </motion.h3>
      <motion.p
        className={textClass}
        initial={{
          x,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            delay: initialDelay + 0.15,
          },
        }}
      >
        {item.desc}
      </motion.p>
      <motion.a
        className={clsx("w-fit grid grid-cols-[1fr_32px] place-items-center")} 
        href={item.repo}
        initial={{
          x,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            delay: initialDelay + 0.25,
          },
        }}
      >
        <div className={clsx("w-full", textClass)}>{item.repo.startsWith("https://") ? item.repo.replace("https://", "") : item.repo}</div>
        <DynamicIcon name="github" className={"h-4 w-4"} />
      </motion.a>
    </div>
  );
};

ResumeProjectItem.displayName = "ResumeProjectItem";

export default ResumeProjectItem;