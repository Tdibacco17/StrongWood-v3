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
    // projectsData?: ProjectDataInterface;
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
    details: {
        firstLongImg?: ImgDataInterface;
        reduceLongImg?: ImgDataInterface;
        twoSmallImg?: ImgDataInterface[];
        // secondTwoSmallImg?: ImgDataInterface[];
        // longSection?: ImgDataInterface;
    };
    categories: SelectedFilterInterface[];
    urlSlug: SelectedFilterInterface
}

export type SelectedFilterInterface = "all" | "kitchen" | "bathroom" | "closet" | "bedroom" | "products";
export type ImgPlacheholderInterface = "long-first" | "long-reduce" | "twoSmall" | "twoSmall-first" | "twoSmall-second";
export interface ProjectSelectorInterface {
    selectorTitle: string;
    selectorFilter: string;
};
export interface NavigateInterface {
    title: string,
    href: string
}