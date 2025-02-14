import React from "react";
import "#/styles/mdx.scss";
import "@ulld/tailwind/websiteStyles.scss";
import "#/styles/globals.scss";
import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { StateWrappedUI } from "@ulld/state/wrappers/stateWrappedUI";
import { Toaster } from "@ulld/tailwind/toaster";
import localFont from "next/font/local";
import SetInitialRender from "#/components/utility/setInitialRender";
import StateWrappedComponents from "#/components/utility/providers/stateWrappedComponents";
import Navbar from "#/components/layouts/navbar/main";
import Footer from "#/components/layouts/footer/main";
import { GoogleAnalytics } from "@next/third-parties/google";
import staticContent from "staticContent";
import MainNavigationDrawer from "#/components/layouts/drawer/main";
import InternalReduxProvider from "#/state/provider";
import NavbarBreakpointHandler from "#/components/utility/navbarBreakpointHandler";
import ThemeMenu from "#/components/UIUtils/themeMenu";
/* import { BetaBanner } from "#/components/general/betaBanner"; */
import { RootProvider } from "fumadocs-ui/provider";
import clsx from "@ulld/utilities/cn";
import { HandleBodyDisplay } from "#/components/docUtils/handleBodyLayout";
import ContactMeDialog from "#/components/interaction/modals/contactCard/main";

const appFont = localFont({
    variable: "--ulld-app-font",
    src: [
        {
            path: "../assets/appFont/DM_Sans/static/DMSans-Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../assets/appFont/DM_Sans/static/DMSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../assets/appFont/DM_Sans/static/DMSans-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../assets/appFont/DM_Sans/static/DMSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/appFont/DM_Sans/static/DMSans-Italic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../assets/appFont/DM_Sans/static/DMSans-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../assets/appFont/DM_Sans/static/DMSans-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
    ],
    display: "swap",
});

const metaDataDesc =
    "Uh Little Less Dum is a forever free, perpetually open source academic note taking app built by a former software engineer for his own pursuit of a theory of quantum gravity.";


export const viewport: Viewport = {
    themeColor: "#333",
    colorScheme: "dark",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
}

/* PRIORITY: Handle this much better and apply throughout the app. Use this source here: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#category */
export const metadata: Metadata = {
    metadataBase: new URL("https://uhlittlelessdum.com"),
    title: "Uh Little Less Dum",
    description: metaDataDesc,
    category: "technology",
    creator: "Andrew C. Iglinski",
    publisher: "Andrew C. Iglinski",
    applicationName: "Uh Little Less Dum",
    authors: [
        {
            name: "Andrew C. Mueller",
        },
        {
            name: "Andrew C. Iglinski",
        },
    ],
    keywords: [
        "physics",
        "science",
        "math",
        "academic",
        "note taking",
        "A little less dumb",
        "gravity",
        "study tools",
        "notes",
        "research",
        "markdown",
        "mdx",
        "STEM",
        "gravity",
        "relativity"
    ],
    robots: {
        index: true,
        follow: true,
    },
    icons: [
        "/icons/favicon.ico",
        "/icons/favicon-16x16.png",
        "/icons/favicon-32x32.png",
        "/icons/apple-touch-icon.png",
        "/icons/android-chrome-192x192.png",
        "/icons/android-chrome-512x512.png",
        "/icons/mstile-150x150.png",
    ],
    openGraph: {
        type: "website",
        determiner: "auto",
        description: metaDataDesc,
        siteName: "Uh Little Less Dum",
        url: staticContent.links.home,
        /* emails: Add this when able to get back on a domain associated email address. */
    },
    twitter: {
        site: staticContent.links.home,
        creator: "Andrew C. Iglinski",
        description: metaDataDesc,
        title: "Uh Little Less Dum",
        images: staticContent.links.media.screenshots.hero,
    },
    appleWebApp: {
        title: "Uh Little Less Dum",
        startupImage: staticContent.links.media.logo,
        statusBarStyle: "black-translucent",
    },
};


const RootLayout = async (props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) => {
    /* ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!, { */
    /* testMode: process.env.NODE_ENV !== "production", */
    /* }); */

    const cookieJar = cookies();

    const preferFs = cookieJar.has("preferFs");

    let p = {
        "data-theme": "dark",
        "data-color-mode": "dark",
        "data-ulld-theme": "ulld",
        "data-js-focus-visible": "",
    };

    /* TODO: Add .noTooltips class to html element according to settings. Create function to toggle class when toggling setting. */

    return (
        <html
            lang="en"
            className={clsx(
                "group/html overflow-x-hidden max-w-screen js-focus-visible dark border-border min-scrollbar bg-background",
                appFont.variable,
            )}
            {...p}
        >
            <head>
                <link rel="icon" href="/icons/favicon.ico" sizes="any" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/icons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/icons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/icons/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <link
                    rel="mask-icon"
                    href="/icons/safari-pinned-tab.svg"
                    color="#0ba5e9"
                />
                <link rel="shortcut icon" href="/icons/favicon.ico" />
                <meta name="msapplication-TileColor" content="#2b5797" />
                <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            </head>
            <body
                className={clsx(
                    "group/body dark max-w-full relative h-auto overflow-x-hidden w-screen min-h-screen overflow-y-auto data-[disContents=true]:contents bg-background",
                    /* "contents", // Remove this if it causes issues. Added on 6-27 to handle sticky sidebar. */
                    // Removed fontsans on 11-20. It was causing build fails after transpiling the tailwind package, and seems to be a duplicate outside of the template app,
                    /* fontSans.variable, */
                    preferFs && "preferFs",
                )}
                id={`Ulld-body-root`}
            >
                <RootProvider
                    theme={{
                        // Come back and enable this. Was having issues with tailwind, but shouldn't be too hard to adress with a little bit of free time.
                        enabled: false,
                        enableColorScheme: false,
                        enableSystem: false,
                    }}
                >
                    <InternalReduxProvider>
                        <HandleBodyDisplay />
                        <Navbar />
                        <MainNavigationDrawer />
                        <NavbarBreakpointHandler />
                        {props.children}
                        <Toaster />
                        {props.modal && props.modal}
                        <SetInitialRender />
                        <StateWrappedUI
                            ignoreConfig
                            ignoreSettings
                            ignoreOnlineStatus
                            loader={{
                                mathjax: ["config"],
                            }}
                            observers={{
                                noSettings: true,
                                noThemeCookie: true,
                            }}
                        />
                        <StateWrappedComponents />
                        <ThemeMenu />
                        <Footer />
                        <ContactMeDialog />
                    </InternalReduxProvider>
                </RootProvider>
            </body>
            <GoogleAnalytics gaId="G-K46X7QHBEX" />
        </html>
    );
};

export default RootLayout;
