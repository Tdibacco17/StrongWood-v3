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
export interface ProjectsDataContextInterface {
    handleProjectDataChange?: Function;
    projectData?: ProjectInterface;
}
export interface ProjectDataInterface {
    [id: string]: ProjectInterface;
}
export interface ProjectInterface {
    projectSlug: string;
    title: string;
    subtitle: string;
    image: ImgDataInterface;
    year: string,
    location: string,
    details: {
        firstLongImg?: ImgDataInterface;
        rectangleImg?: ImgDataInterface;
        twoSmallImg?: ImgDataInterface[];
        // secondTwoSmallImg?: ImgDataInterface[];
        // longSection?: ImgDataInterface;
    };
    categories: SelectedFilterInterface[];
    urlSlug: SelectedFilterInterface
}
export type SelectedFilterInterface =
    "all"
    | "kitchen"
    | "bathroom"
    | "closet"
    | "bedroom"
    | "local"
    | "diningroom"
    | "products";

export type ImgPlacheholderInterface = "portrait" | "rectangle" | "twoSmall"

export interface ProjectSelectorInterface {
    selectorTitle: string;
    selectorFilter: string;
};