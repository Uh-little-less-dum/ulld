import React, { Suspense } from "react";
import { RandomBackground } from "@ulld/ui/randomBackground";
import { FullScreenNavigationMenu } from "@ulld/ui/fullScreenNav";
import { BetaLandingPageSearchInput } from "./searchInput";


interface BasicLandingLayoutProps {
    searchParams?: object
}


const BasicLandingLayout = (props: BasicLandingLayoutProps) => {
    return (
        <div className={"w-full h-fit"}>
            <RandomBackground />
            <div className={"scroll-snap-container"}>
                <section
                    className={
                        "scrollSnapSection relative flex flex-col justify-center items-center"
                    }
                >
                    <BetaLandingPageSearchInput />
                </section>
                <section
                    className={
                        "min-h-screen relative bg-background w-full flex flex-col justify-center items-center pt-8"
                    }
                >
                    <Suspense>
                        <FullScreenNavigationMenu />
                    </Suspense>
                </section>
            </div>
        </div>
    );
};

BasicLandingLayout.displayName = "BasicLandingLayout";

export default BasicLandingLayout