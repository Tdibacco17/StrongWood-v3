export interface ImgDataInterface {
    imgSrc: string,
    imgAlt: string,
    objPosition: string
}
export interface IconInterface {
    iconSlug: string,
    viewBox: string,
    color: string,
    size: string,
    path: string[]
    href?: string,
    stroke?: string
}

export interface IconProps {
    fill: string,
    size: "small" | "medium",
    hover: boolean,
    link?: string
}