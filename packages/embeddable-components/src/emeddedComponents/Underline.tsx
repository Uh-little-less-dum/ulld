import clsx from "clsx";
import React, { HTMLProps } from "react";
import { WithTooltipWrapper, getToolTipWrapperContent } from "./Hl";
import { PropColor } from "@ulld/utilities/shadColorMap";
import { ComposedTooltip } from "./composedTooltip";
import { componentConfig } from "../componentConfigs/underline";

type Props = {
    thin?: boolean;
    thick?: boolean;
} & Record<keyof PropColor, boolean> &
    WithTooltipWrapper &
    HTMLProps<HTMLSpanElement>;

export const Underline = (p: Props) => {
    const { thin, thick, ...props } = componentConfig.parse(p);
    /* TODO: Move this to the zod object. */
    let tt = getToolTipWrapperContent(props);
    if (tt) {
        return (
            <ComposedTooltip
                content={
                    tt.isLink ? (
                        <a href={tt.content}>{tt.content}</a>
                    ) : (
                        <p>{tt.content}</p>
                    )
                }
            >
                <span
                    className={clsx(
                        "underline underline-offset-2",
                        /* thick && "decoration-4", */
                        /* thin && "decoration-1", */
                        /* Boolean(!thin && !thick) && "decoration-2", */
                    )}
                    {...props}
                    style={{
                        ...props.css,
                        ...p.style,
                    }}
                />
            </ComposedTooltip>
        );
    }
    return (
        <span
            className={clsx(
                "underline underline-offset-2",
                /* thick && "decoration-4", */
                /* thin && "decoration-1", */
                /* Boolean(!thin && !thick) && "decoration-2", */
            )}
            {...props}
            style={{
                ...props.css,
                ...p.style,
            }}
        />
    );
};

Underline.displayName = "Underline";
