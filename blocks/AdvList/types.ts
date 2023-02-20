import { StaticImageData } from "next/image"

export type advPartType = {
    img: StaticImageData,
    head: string,
    text?: React.ReactNode | string,
    ex?:string,
    side: 'left' | 'right',
    bg: StaticImageData
}