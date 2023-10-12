export interface ImgDataInterface {
    imgSrc: string,
    imgAlt: string,
}
export interface ProjectsDataContextInterface {
    projectsData?: ProjectDataInterface;
    handleProjectDataChange?: Function;
    projectData?: ProjectInterface;
    handleFilteredProjects?: Function;
}
export interface ProjectDataInterface {
    [id: string]: ProjectInterface;
}
export interface ProjectInterface {
    projectSlug: string;
    title: string;
    subtitle: string;
    image: ImgDataInterface;
    details?: {
        firstPortraitImg: ImgDataInterface;
        firstTwoSmallImg: ImgDataInterface;
        secondPortraitImg: ImgDataInterface;
        secondTwoSmallImg: ImgDataInterface;
        longSectionImage: ImgDataInterface;
    };
    categories: SelectedFilterInterface[];
}
export type SelectedFilterInterface = "all" | "kitchen" | "bathroom" | "closet" | "bedroom" | "products";