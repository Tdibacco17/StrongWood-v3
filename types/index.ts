export interface ImgDataInterface {
    imgSrc: string,
    imgAlt: string,
    position: string
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
        firstPortraitImg?: ImgDataInterface;
        secondPortraitImg?: ImgDataInterface;
        // firstTwoSmallImg?: ImgDataInterface;
        // secondTwoSmallImg?: ImgDataInterface;
        // longSectionImage?: ImgDataInterface;
        twoImages?: ImgDataInterface[];
    };
    categories: SelectedFilterInterface[];
    urlSlug: SelectedFilterInterface
}

export type SelectedFilterInterface = "all" | "kitchen" | "bathroom" | "closet" | "bedroom" | "products";
export interface ProjectSelectorInterface {
    selectorTitle: string;
    selectorFilter: string;
};
export interface NavigateInterface {
    title: string,
    href: string
}