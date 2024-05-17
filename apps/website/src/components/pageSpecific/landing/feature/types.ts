import { ForwardRefComponent } from "framer-motion"
import { FC, ReactNode } from "react"

export const initialFeatureTimeout = 3000

export type BadgesGroup = {
    label: string
    badges: string[]
}

type Orientation = "rtl" | "ltr"

export type FeatureUIStage = "hidden" | "current" | "past"

type FCProps = {
    orientation: Orientation
    shouldShow: boolean
}

type FeatureFCField = FC<FCProps>
type FeatureFCFieldNoAnim = ForwardRefComponent<HTMLDivElement, FCProps>

export interface FeatureContainerProps {
    title: NonNullable<ReactNode> | FeatureFCField
    label: NonNullable<ReactNode> | FeatureFCField
    desc: FeatureFCField
    badgesLeft?: BadgesGroup
    badgesRight?: BadgesGroup
    orientation: Orientation
    component: FeatureFCField
    override?: FeatureFCFieldNoAnim
    expandDisplay?: boolean
    spaceEven?: boolean
    displayContainerClasses?: string
}


export type FeaturedContainerPropsRequired = Omit<FeatureContainerProps, "idx" | "orientation" | "top">
