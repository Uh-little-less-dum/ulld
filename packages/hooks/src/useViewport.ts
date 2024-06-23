import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicEffect";

export interface ViewportData {
    window: {
        width: number;
        height: number;
        aspectRatio: number;
    };
}

export const useViewport = (noScroll: boolean = false, once: boolean = false) => {
    const [viewport, setViewport] = useState<ViewportData | null>(null);
    const handleViewport = () => {
        let d = document.body?.getBoundingClientRect();
        setViewport({
            ...d,
            window: {
                width: window.innerWidth,
                height: window.innerHeight,
                aspectRatio: window.innerWidth / window.innerHeight,
            },
        });
    };

    useIsomorphicLayoutEffect(() => {
        if (typeof window === "undefined") return;
        handleViewport();
        if(once) return
        window.addEventListener("resize", handleViewport);
        if (!noScroll) {
            window.addEventListener("scroll", handleViewport);
        }
        return () => {
            window.removeEventListener("resize", handleViewport);
            window.removeEventListener("scroll", handleViewport);
        };
    }, []);
    return viewport;
};
