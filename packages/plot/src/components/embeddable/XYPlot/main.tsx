import React from "react";
import { xyPlotPropSchema, XYPlotProps } from "./utils/schemas";
import { XYPlotProvider } from "./context";
import XYPlotContainer from "./container";
import { ChartChildren } from "./types";

const XYPlot = ({ children, ...p }: XYPlotProps & { children: ChartChildren }) => {
    let props = xyPlotPropSchema.parse(p);
    return (
        <XYPlotProvider
            initialValues={{
                numericalData: props.numericalData
            }}
        >
            <XYPlotContainer {...props}>{children}</XYPlotContainer>
        </XYPlotProvider>
    );
};

XYPlot.displayName = "XYPlot";

export default XYPlot;