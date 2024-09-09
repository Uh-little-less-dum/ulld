"use client";
import React from "react";
import { ResumeData } from "../../app/resume/resumeData";
import clsx from "clsx";
import { motion } from "framer-motion";
import { DynamicIcon, ValidIconName } from "@ulld/icons";

interface ResumeProjectItemProps {
    dir: "right" | "left";
    item: ResumeData["projects"][number];
    index: number;
    initialDelay: number;
}

interface LinkItemProps {
    href: string;
    icon: ValidIconName;
    initialDelay: number;
    textClass: string;
    x: number;
    dir: "right" | "left"
    className?: string
}

const LinkItem = ({
    href,
    icon,
    textClass,
    initialDelay,
    x,
    dir,
    className
}: LinkItemProps) => {
    return (
        <motion.a
            className={clsx("w-fit flex flex-row justify-center items-center gap-2 text-muted-foreground text-sm mt-1", dir === "right" && "min-[740px]:flex-row-reverse", className)}
            href={href}
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
            whileHover={{
                color: "#fff",
                /* transition: { */
                /*     duration: 0.25 */
                /* } */
            }}
        >
            <DynamicIcon name={icon} className={"h-4 w-4"} />
            <div className={clsx("w-full", textClass)}>
                {href.startsWith("https://") ? href.replace("https://", "") : href}
            </div>
        </motion.a>
    );
};

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
            <LinkItem
                href={item.repo}
                icon="github"
                textClass={textClass}
                x={x}
                initialDelay={initialDelay}
                dir={dir}
            />
            {item.hostedSite && <LinkItem
                href={item.hostedSite}
                icon="house"
                textClass={textClass}
                x={x}
                initialDelay={initialDelay}
                dir={dir}
                /* className={"mt-2"} */
            />}
        </div>
    );
};

ResumeProjectItem.displayName = "ResumeProjectItem";

export default ResumeProjectItem;
