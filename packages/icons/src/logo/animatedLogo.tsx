import React, { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";

interface AnimatedUlldLogoProps
    extends React.ComponentProps<typeof motion.svg> {
    show: boolean;
    width?: number;
    height?: number;
    delay?: number;
    speed?: number
}

const uLineDir = 0.6;

const durationMap: [number, number, number] = [
    uLineDir,
    uLineDir * 0.7,
    uLineDir,
];
const delayMap: [number, number, number] = [
    0,
    durationMap[0],
    durationMap[0] + durationMap[1],
];
const totalInitialDuration = durationMap.reduce((a, b) => a + b);

const getDuration = (i: number, speed: number = 1) => {
    if (i <= 3) {
        return durationMap[i - 1] / speed
    }
    return 1.2 / speed
};

const getDelay = (i: number, speed: number = 1) => {
    if (i <= 3) {
        return delayMap[i - 1] / speed
    }
    return totalInitialDuration / speed + (i - 4) * 0.75 / speed
};

const pathVariants: Variants = {
    hide: {
        opacity: 0,
        strokeWidth: 0,
        pathLength: 0,
    },
    show: (i: {idx: number, speed: number}) => {
        const delay = getDelay(i.idx, i.speed);
        return {
            opacity: 1,
            strokeWidth: 16,
            pathLength: 1,
            transition: {
                pathLength: {
                    delay,
                    duration: getDuration(i.idx, i.speed),
                    type: i.idx <= 3 ? undefined : "spring",
                    ease: i.idx <= 3 ? "linear" : undefined,
                    bounce: 0,
                },
                opacity: { delay, duration: 0.01 },
            },
        };
    },
};

const pathVariantsBackwards: Variants = {
    hide: {
        opacity: 0,
        strokeWidth: 0,
        pathLength: 1,
        pathOffset: 1,
    },
    show: (i: {idx: number, speed: number}) => {
        const delay = getDelay(i.idx, i.speed);
        return {
            opacity: 1,
            strokeWidth: 16,
            pathLength: 1,
            pathOffset: 0,
            transition: {
                pathOffset: {
                    delay,
                    duration: getDuration(i.idx, i.speed),
                    type: i.idx <= 3 ? undefined : "spring",
                    ease: i.idx <= 3 ? "linear" : undefined,
                    bounce: 0,
                },
                opacity: { delay, duration: 0.01 },
            },
        };
    },
};

export const AnimatedUlldLogo = ({
    show,
    width,
    height,
    delay,
    speed = 1,
    ...props
}: AnimatedUlldLogoProps) => {
    const [shouldShow, setShouldShow] = useState(show);
    useEffect(() => {
        if (show && delay) {
            setTimeout(() => {
                setShouldShow(true);
            }, delay);
            return;
        }
        setShouldShow(show);
    }, [show]);
    return (
        <motion.svg
            height="100%"
            strokeMiterlimit="10"
            style={{
                fillRule: "nonzero",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
            version="1.1"
            viewBox="0 0 221.59 183.929"
            width="100%"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            animate={shouldShow ? "show" : "hide"}
            initial={"hide"}
            {...props}
        >
            <defs />
            <g id="Layer-1">
                <motion.path
                    d="M91.989 40.1446L90.7736 139.37"
                    fill="none"
                    stroke="hsl(var(--foreground))"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    variants={pathVariants}
                    custom={{
                        idx: 4,
                        speed: speed
                    }}
                />
                <motion.path
                    d="M120.908 40.1446L119.692 139.37"
                    fill="none"
                    stroke="hsl(var(--foreground))"
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    variants={pathVariants}
                    custom={{
                        idx: 5,
                        speed
                    }}
                />
                <g opacity="1">
                    <motion.path
                        d="M67.3056 15.6927L66.0902 143.268"
                        fill="none"
                        stroke="hsl(var(--brand))"
                        strokeLinecap="butt"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        variants={pathVariantsBackwards}
                        custom={{
                            idx: 3, speed
                        }}
                    />
                    <motion.path
                        d="M25.7161 15.6927L24.5007 143.268"
                        fill="none"
                        stroke="hsl(var(--brand))"
                        strokeLinecap="butt"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        variants={pathVariants}
                        custom={{idx: 1, speed}}
                    />
                    <motion.path
                        d="M66.0902 143.268C66.0902 154.619 56.7801 163.821 45.2955 163.821C33.8109 163.821 24.5007 154.619 24.5007 143.268"
                        fill="none"
                        stroke="hsl(var(--brand))"
                        strokeLinecap="butt"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        variants={pathVariantsBackwards}
                        custom={{idx: 2, speed}}
                    />
                </g>
                <g opacity="1">
                    <motion.path
                        d="M147.009 40.1446L145.794 139.37"
                        fill="none"
                        stroke="hsl(var(--foreground))"
                        strokeLinecap="butt"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        variants={pathVariantsBackwards}
                        custom={{idx: 6, speed}}
                    />
                    <motion.path
                        d="M151.704 48.0826C179.105 48.0826 201.317 66.7409 201.317 89.7571C201.317 112.773 179.105 131.432 151.704 131.432"
                        fill="none"
                        stroke="hsl(var(--foreground))"
                        strokeLinecap="butt"
                        strokeLinejoin="round"
                        strokeWidth="16"
                        variants={pathVariants}
                        custom={{idx: 7, speed}}
                    />
                </g>
            </g>
        </motion.svg>
    );
};

AnimatedUlldLogo.displayName = "AnimatedUlldLogo";
