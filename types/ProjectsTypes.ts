import { ImgDataInterface } from ".";

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
        portraitImg?: ImgDataInterface;
        rectangleImg?: ImgDataInterface;
        secondRectangleImg?: ImgDataInterface;
        thirdRectangleImg?: ImgDataInterface;
        twoSmallImg?: ImgDataInterface[];
        secondTwoSmallImg?: ImgDataInterface[];
        thirdTwoSmallImg?: ImgDataInterface[];
        technicalInfo?: TechnicalInfoInterface;
        secondTechnicalInfo?: TechnicalInfoInterface;
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

export interface TechnicalInfoInterface {
    image: ImgDataInterface,
    title: string,
    description: string[],
    footer?: {
        year: string[],
        location: string[],
        propousal: string[],
        materials: string[]
    },
    homeFooterData?: {
        proyects?: { title: string, url: string },
        contact?: { title: string, url: string }
    }
};

/*
    technicalInfo: {
        title: "Diseños personalizados",
        subtitle:"El balance perfecto entre hierro y madera",
        description: "Nos especializamos en diseñar y fabricar muebles a medida para todo tipo de proyectos, ya sea para hogares, oficinas o locales comerciales. Desde la conceptualización hasta la instalación final, nos encargamos de cada paso del proceso. Nuestro compromiso con la calidad se refleja en cada mueble que creamos, utilizando maderas selectas y técnicas artesanales.",
        propousal: "En Strong Wood, creemos que los muebles no solo deben ser funcionales, sino también una expresión de la belleza y la personalidad de quienes los poseen. Cada proyecto es una colaboración, donde trabajamos estrechamente con nuestros clientes para dar vida a sus visiones y crear piezas únicas que perduren en el tiempo.",
        location: "Buscamos que el habitar sea una cálida experiencia.",
        tipology: "Somos un equipo de arquitectas que apostamos al buen diseño. Diseñamos y ejecutamos proyectos de arquitectura e interiorismo de múltiples y variadas escalas. Nos apasiona ocuparnos de cada detalle, de inicio a fin, jugar con diferentes texturas & materiales que aporten calidez y originalidad al espacio, incorporando siempre elementos artísticos y naturales para que el sello Fabric nunca pase inadvertido."
    }
*/