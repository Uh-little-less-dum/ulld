import { useLocalStorage } from "@ulld/hooks/useLocalStorage";
import React from "react";
import { MainPlotFilterType, mainPlotTypes } from "../../../types";
import cn from "@ulld/utilities/cn";
import ClockDisplay from "./clockDisplay";
import { useDashboardContext } from "../../../util/provider";


const TaskListDetailsTopRightCard = (
) => {
    const [_plotFilterType, setPlotFilterType] =
        useLocalStorage<MainPlotFilterType>("ulld-dashboard-main-plot-filter");

    const {plotFilterType} = useDashboardContext()

    return (
        <div className={"w-full flex flex-col justify-center items-center"}>
            <div className={"flex-grow flex flex-col items-end w-full text-[10px] lg:text-sm text-muted-foreground"}><ClockDisplay /></div>
            <div className={"w-full flex flex-row justify-end items-center"}>
                <div
                    className={"grid gap-4"}
                    style={{
                        gridTemplateColumns: `repeat(${mainPlotTypes.length}, 1fr)`,
                    }}
                >
                    {mainPlotTypes.map((t) => {
                        return (
                            <a
                                role="button"
                                key={`plot-filter-type-${t}`}
                                onClick={() => setPlotFilterType(t)}
                                className={cn(
                                    "text-sm w-full h-full flex justify-center items-center border rounded-[20px] py-2 px-3 transition-colors duration-200",
                                    plotFilterType === t
                                        ? "border-primary"
                                        : " hover:bg-secondary hover:text-secondary-foreground",
                                )}
                            >
                                {t}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

TaskListDetailsTopRightCard.displayName = "TaskListDetailsTopRightCard";

export default TaskListDetailsTopRightCard;