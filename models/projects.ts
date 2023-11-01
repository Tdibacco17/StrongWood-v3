import { ProjectDataInterface } from "@/types/ProjectsTypes"

export const projectsCategories: string[] = ["all", "kitchen", "bathroom", "closet", "local", "bedroom", "diningroom", "products"]

export const projectsData: ProjectDataInterface = {
    homeData: {
        projectSlug: "home-data",
        title: "",
        subtitle: "",
        image: {
            "imgSrc": "/assets/img/homePage/banner/test.jpg",
            "imgAlt": "banner image",
            "objPosition": "50% 50%"
        },
        details: {
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/homePage/Strong-96.webp",
                    imgAlt: "Home Image",
                    objPosition: "50% 50%"
                },
                {
                    imgSrc: "/assets/img/homePage/Strong-23.webp",
                    imgAlt: "Home Image",
                    objPosition: "50% 50%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/homePage/logoStrong.webp",
                imgAlt: "Serie Nova",
                objPosition: "50% 50%"
            },
            secondTwoSmallImg: [
                {
                    imgSrc: "/assets/img/homePage/Strong-108.webp",
                    imgAlt: "Home Image",
                    objPosition: "50% 50%"
                },
                {
                    imgSrc: "/assets/img/homePage/Strong-58.webp",
                    imgAlt: "Home Image",
                    objPosition: "50% 50%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/homePage/Strong-96.webp",
                    imgAlt: "Home Image",
                    objPosition: "50% 50%"
                },
                title: "Buscamos que el habitar sea una cálida experiencia.",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                    "In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    "Phasellus ut tortor vel libero viverra suscipit."
                ],
                homeFooterData: {
                    proyects: {
                        title: "Ver proyectos",
                        url: "/projects"
                    }
                }
            },
            secondTechnicalInfo: {
                image: {
                    imgSrc: "/assets/img/homePage/Strong-58.webp",
                    imgAlt: "Home Image",
                    objPosition: "50% 50%"
                },
                title: "Tenés un proyecto? Podemos darle vida juntos!",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                    "In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    "Phasellus ut tortor vel libero viverra suscipit."
                ],
                homeFooterData: {
                    contact: {
                        title: "Contactanos",
                        url: "/contact"
                    }
                }
            }
        },
        year: "",
        location: "",
        categories: ["all"],
        urlSlug: "all"
    },
    "casa-san-blas": {
        projectSlug: "casa-san-blas",
        title: "Casa San Blas",
        subtitle: "Refacción cocina",
        image: {
            imgSrc: "/assets/img/projectsPage/kitchen/nova/Strong-cocina-003.webp",
            imgAlt: "Serie Nova",
            objPosition: "0% 50%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/kitchen/nova/Strong-cocina-003.webp",
                imgAlt: "Serie Nova",
                objPosition: "50% 50%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/kitchen/nova/STRONG-28.webp",
                    imgAlt: "Serie Nova",
                    objPosition: "35% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/kitchen/nova/STRONG-11.webp",
                    imgAlt: "Serie Nova",
                    objPosition: "50% 0%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/kitchen/nova/STRONG-16.webp",
                imgAlt: "Serie Nova",
                objPosition: "40% 60%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/kitchen/nova/STRONG-11.webp",
                    imgAlt: "Serie Nova",
                    objPosition: "50% 0%"
                },
                title: "Casa San Blas",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "kitchen"],
        urlSlug: "kitchen"
    },
    "cocina-new-york": {
        projectSlug: "cocina-new-york",
        title: "Serie New York",
        subtitle: "Amueblamiento hogar",
        image: {
            imgSrc: "/assets/img/projectsPage/kitchen/newYork/Strong-142.webp",
            imgAlt: "Serie New York",
            objPosition: "50% 25%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/kitchen/newYork/Strong-142.webp",
                imgAlt: "Serie New York",
                objPosition: "20% 40%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/kitchen/newYork/Strong-149.webp",
                    imgAlt: "Serie New York",
                    objPosition: "55% 50%",
                },
                {
                    imgSrc: "/assets/img/projectsPage/kitchen/newYork/Strong-140.webp",
                    imgAlt: "Serie New York",
                    objPosition: "25% 35%",
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/kitchen/newYork/Strong-146.webp",
                imgAlt: "Serie New York",
                objPosition: "30% 40%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/kitchen/newYork/Strong-149.webp",
                    imgAlt: "Serie New York",
                    objPosition: "55% 50%",
                },
                title: "Serie New York",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "kitchen"],
        urlSlug: "kitchen"
    },
    "cocina-premium": {
        projectSlug: "cocina-premium",
        title: "Serie Premium",
        subtitle: "Cocina",
        image: {
            imgSrc: "/assets/img/projectsPage/kitchen/premium/Strong-266.webp",
            imgAlt: "Serie Premium",
            objPosition: "50% 50%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/kitchen/premium/Strong-266.webp",
                imgAlt: "Serie Premium",
                objPosition: "50% 55%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/kitchen/premium/Strong-272.webp",
                    imgAlt: "Serie Premium",
                    objPosition: "50% 0%",
                },
                {
                    imgSrc: "/assets/img/projectsPage/kitchen/premium/Strong-275.webp",
                    imgAlt: "Serie Premium",
                    objPosition: "25% 35%",
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/kitchen/premium/Strong-284.webp",
                imgAlt: "Serie Premium",
                objPosition: "30% 40%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/kitchen/premium/Strong-272.webp",
                    imgAlt: "Serie Premium",
                    objPosition: "50% 0%",
                },
                title: "Serie Premium",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "kitchen"],
        urlSlug: "kitchen"
    },
    "cocina-nordica": {
        projectSlug: "cocina-nordica",
        title: "Serie Nordica",
        subtitle: "Cocina",
        image: {
            imgSrc: "/assets/img/projectsPage/kitchen/nordica/Strong-208.webp",
            imgAlt: "Serie Nordica",
            objPosition: "50% 55%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/kitchen/nordica/Strong-208.webp",
                imgAlt: "Serie Nordica",
                objPosition: "50% 80%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/kitchen/nordica/Strong-225.webp",
                    imgAlt: "Serie Nordica",
                    objPosition: "40% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/kitchen/nordica/Strong-234.webp",
                    imgAlt: "Serie Nordica",
                    objPosition: "60% 0%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/kitchen/nordica/Strong-239.webp",
                imgAlt: "Serie Nordica",
                objPosition: "50% 55%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/kitchen/nordica/Strong-225.webp",
                    imgAlt: "Serie Nordica",
                    objPosition: "40% 0%"
                },
                title: "Serie Nordica",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "kitchen"],
        urlSlug: "kitchen"
    },
    // "cocina-deluxe": {
    //     projectSlug: "cocina-deluxe",
    //     title: "Serie Deluxe",
    //     subtitle: "Cocina",
    //     image: {
    //         imgSrc: "/assets/img/projectsPage/kitchen/deluxe/Strong-cocina-000.webp",
    //         imgAlt: "Serie Deluxe",
    //         objPosition: "80% 50%"
    //     },
    //     year: "2022",
    //     location: "Buenos Aires, Argentina",
    //     details: {
    //         portraitImg: {
    //             imgSrc: "/assets/img/projectsPage/kitchen/deluxe/Strong-cocina-000.webp",
    //             imgAlt: "Serie Deluxe",
    //             objPosition: "50% 70%"
    //         },
    //     },
    //     categories: ["all", "kitchen"],
    //     urlSlug: "kitchen"
    // },
    "vajillero-london": {
        projectSlug: "vajillero-london",
        title: "Vajillero",
        subtitle: "Serie London",
        image: {
            imgSrc: "/assets/img/projectsPage/diningroom/vajilleroLondon/Strong-136.webp",
            imgAlt: "Vajillero",
            objPosition: "50% 100%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/diningroom/vajilleroLondon/Strong-136.webp",
                imgAlt: "Vajillero",
                objPosition: "50% 100%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/diningroom/vajilleroLondon/Strong-133.webp",
                    imgAlt: "Vajillero",
                    objPosition: "100% 0%",
                },
                {
                    imgSrc: "/assets/img/projectsPage/diningroom/vajilleroLondon/Strong-134.webp",
                    imgAlt: "Vajillero",
                    objPosition: "50% 50%",
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/diningroom/vajilleroLondon/Strong-139.webp",
                imgAlt: "Vajillero",
                objPosition: "50% 35%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/diningroom/vajilleroLondon/Strong-133.webp",
                    imgAlt: "Vajillero",
                    objPosition: "100% 0%",
                },
                title: "Vajillero",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "diningroom"],
        urlSlug: "diningroom"
    },
    "recibidor-london": {
        projectSlug: "recibidor-london",
        title: "Recibidor",
        subtitle: "Serie London",
        image: {
            imgSrc: "/assets/img/projectsPage/diningroom/recibidorLondon/Strong-247.webp",
            imgAlt: "Recibidor",
            objPosition: "80% 40%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/diningroom/recibidorLondon/Strong-247.webp",
                imgAlt: "Recibidor",
                objPosition: "55% 100%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/diningroom/recibidorLondon/Strong-252.webp",
                    imgAlt: "Recibidor",
                    objPosition: "80% 0%",
                },
                {
                    imgSrc: "/assets/img/projectsPage/diningroom/recibidorLondon/Strong-246.webp",
                    imgAlt: "Recibidor",
                    objPosition: "45% 50%",
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/diningroom/recibidorLondon/Strong-250.webp",
                imgAlt: "Recibidor",
                objPosition: "0% 50%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/diningroom/recibidorLondon/Strong-252.webp",
                    imgAlt: "Recibidor",
                    objPosition: "80% 0%",
                },
                title: "Recibidor",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "diningroom"],
        urlSlug: "diningroom"
    },
    "rack-tv-london": {
        projectSlug: "rack-tv-london",
        title: "Rack TV",
        subtitle: "Serie London",
        image: {
            imgSrc: "/assets/img/projectsPage/diningroom/rackTvLondon/Strong-265.webp",
            imgAlt: "Rack TV",
            objPosition: "30% 80%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/diningroom/rackTvLondon/Strong-265.webp",
                imgAlt: "Rack TV",
                objPosition: "30% 50%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/diningroom/rackTvLondon/Strong-259.webp",
                    imgAlt: "Rack TV",
                    objPosition: "0% 50%",
                },
                {
                    imgSrc: "/assets/img/projectsPage/diningroom/rackTvLondon/Strong-258.webp",
                    imgAlt: "Rack TV",
                    objPosition: "0% 50%",
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/diningroom/rackTvLondon/Strong-255.webp",
                imgAlt: "Rack TV",
                objPosition: "40% 100%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/diningroom/rackTvLondon/Strong-259.webp",
                    imgAlt: "Rack TV",
                    objPosition: "0% 50%",
                },
                title: "Rack TV",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "diningroom"],
        urlSlug: "diningroom"
    },
    "farina-mostrador": {
        projectSlug: "farina-mostrador",
        title: "Mostrador",
        subtitle: "Farina & Pane",
        image: {
            imgSrc: "/assets/img/projectsPage/local/farinaMostrador/Strong-176.webp",
            imgAlt: "Mostrador",
            objPosition: "45% 50%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/local/farinaMostrador/Strong-176.webp",
                imgAlt: "Mostrador",
                objPosition: "50% 50%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/local/farinaMostrador/Strong-170.webp",
                    imgAlt: "Mostrador",
                    objPosition: "30% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/local/farinaMostrador/Strong-175.webp",
                    imgAlt: "Mostrador",
                    objPosition: "60% 50%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/local/farinaMostrador/Strong-174.webp",
                imgAlt: "Mostrador",
                objPosition: "60% 65%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/local/farinaMostrador/Strong-170.webp",
                    imgAlt: "Mostrador",
                    objPosition: "30% 0%"
                },
                title: "Mostrador",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "local"],
        urlSlug: "local"
    },
    "farina-estanteria": {
        projectSlug: "farina-estanteria",
        title: "Estanteria",
        subtitle: "Farina & Pane",
        image: {
            imgSrc: "/assets/img/projectsPage/local/farinaEstanteria/Strong-162.webp",
            imgAlt: "Estanteria",
            objPosition: "0% 50%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/local/farinaEstanteria/Strong-162.webp",
                imgAlt: "Estanteria",
                objPosition: "25% 100%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/local/farinaEstanteria/Strong-165.webp",
                    imgAlt: "Estanteria",
                    objPosition: "15% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/local/farinaEstanteria/Strong-157.webp",
                    imgAlt: "Estanteria",
                    objPosition: "50% 0%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/local/farinaEstanteria/Strong-167.webp",
                imgAlt: "Estanteria",
                objPosition: "50% 60%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/local/farinaEstanteria/Strong-165.webp",
                    imgAlt: "Estanteria",
                    objPosition: "15% 0%"
                },
                title: "Estanteria",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "local"],
        urlSlug: "local"
    },
    "farina-isla": {
        projectSlug: "farina-isla",
        title: "Isla",
        subtitle: "Farina & Pane",
        image: {
            imgSrc: "/assets/img/projectsPage/local/farinaIsla/Strong-183.webp",
            imgAlt: "Isla",
            objPosition: "30% 0%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/local/farinaIsla/Strong-183.webp",
                imgAlt: "Isla",
                objPosition: "30% 0%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/local/farinaIsla/Strong-185.webp",
                    imgAlt: "Isla",
                    objPosition: "35% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/local/farinaIsla/Strong-178.webp",
                    imgAlt: "Isla",
                    objPosition: "65% 100%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/local/farinaIsla/Strong-203.webp",
                imgAlt: "Isla",
                objPosition: "30% 0%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/local/farinaIsla/Strong-185.webp",
                    imgAlt: "Isla",
                    objPosition: "35% 0%"
                },
                title: "Isla",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "local"],
        urlSlug: "local"
    },
    "farina-alacena-colgante": {
        projectSlug: "farina-alacena-colgante",
        title: "Alacena colgante",
        subtitle: "Farina & Pane",
        image: {
            imgSrc: "/assets/img/projectsPage/local/farinaAlacenaColgante/Strong-182.webp",
            imgAlt: "Alacena colgante",
            objPosition: "40% 70%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/local/farinaAlacenaColgante/Strong-182.webp",
                imgAlt: "Alacena colgante",
                objPosition: "30% 100%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/local/farinaAlacenaColgante/Strong-178.webp",
                    imgAlt: "Alacena colgante",
                    objPosition: "40% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/local/farinaAlacenaColgante/Strong-187.webp",
                    imgAlt: "Alacena colgante",
                    objPosition: "50% 0%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/local/farinaAlacenaColgante/Strong-181.webp",
                imgAlt: "Alacena colgante",
                objPosition: "70% 100%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/local/farinaAlacenaColgante/Strong-178.webp",
                    imgAlt: "Alacena colgante",
                    objPosition: "40% 0%"
                },
                title: "Alacena colgante",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "local"],
        urlSlug: "local"
    },
    "gorila-recepcion": {
        projectSlug: "gorila-recepcion",
        title: "Recepción",
        subtitle: "Gorilla Fitness",
        image: {
            imgSrc: "/assets/img/projectsPage/local/gorilaRecepcion/Strong-gorila1.webp",
            imgAlt: "Recepción",
            objPosition: "50% 80%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/local/gorilaRecepcion/Strong-gorila1.webp",
                imgAlt: "Recepción",
                objPosition: "40% 60%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/local/gorilaRecepcion/Strong-gorila2.webp",
                    imgAlt: "Recepción",
                    objPosition: "50% 25%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/local/gorilaRecepcion/Strong-gorila3.webp",
                    imgAlt: "Recepción",
                    objPosition: "50% 85%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/local/gorilaRecepcion/Strong-gorila2.webp",
                    imgAlt: "Recepción",
                    objPosition: "50% 25%"
                },
                title: "Recepción",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "local"],
        urlSlug: "local"
    },
    "timo-cajonera-escritorio": {
        projectSlug: "timo-cajonera-escritorio",
        title: "Cajonera & escritorio",
        subtitle: "Timo Online",
        image: {
            imgSrc: "/assets/img/projectsPage/local/timoEscritorio/Strong-timo3.webp",
            imgAlt: "Cajonera & escritorio",
            objPosition: "50% 80%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/local/timoEscritorio/Strong-timo3.webp",
                imgAlt: "Cajonera & escritorio",
                objPosition: "40% 80%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/local/timoEscritorio/Strong-timo1.webp",
                    imgAlt: "Cajonera & escritorio",
                    objPosition: "50% 80%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/local/timoEscritorio/Strong-timo2.webp",
                    imgAlt: "Cajonera & escritorio",
                    objPosition: "50% 80%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/local/timoEscritorio/Strong-timo1.webp",
                    imgAlt: "Cajonera & escritorio",
                    objPosition: "50% 80%"
                },
                title: "Cajonera & escritorio",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "local"],
        urlSlug: "local"
    },
    "vanitory-nordico": {
        projectSlug: "vanitory-nordico",
        title: "Serie Nordico",
        subtitle: "Vanitory",
        image: {
            imgSrc: "/assets/img/projectsPage/bathroom/nordico/Strong-241.webp",
            imgAlt: "Serie Nordico",
            objPosition: "50% 50%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/bathroom/nordico/Strong-241.webp",
                imgAlt: "Serie Nordico",
                objPosition: "50% 60%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/bathroom/nordico/Strong-117.webp",
                    imgAlt: "Serie Nordico",
                    objPosition: "50% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/bathroom/nordico/Strong-242.webp",
                    imgAlt: "Serie Nordico",
                    objPosition: "80% 100%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/bathroom/nordico/Strong-117.webp",
                    imgAlt: "Serie Nordico",
                    objPosition: "50% 0%"
                },
                title: "Serie Nordico",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "bathroom"],
        urlSlug: "bathroom"
    },
    "vanitory-new-york": {
        projectSlug: "vanitory-new-york",
        title: "Serie New York",
        subtitle: "Vanitory",
        image: {
            imgSrc: "/assets/img/projectsPage/bathroom/newYork/Strong-300.webp",
            imgAlt: "Serie New York",
            objPosition: "45% 50%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/bathroom/newYork/Strong-300.webp",
                imgAlt: "Serie New York",
                objPosition: "45% 0%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/bathroom/newYork/Strong-302.webp",
                    imgAlt: "Serie New York",
                    objPosition: "20% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/bathroom/newYork/Strong-299.webp",
                    imgAlt: "Serie New York",
                    objPosition: "50% 0%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/bathroom/newYork/Strong-298.webp",
                imgAlt: "Serie New York",
                objPosition: "50% 50%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/bathroom/newYork/Strong-302.webp",
                    imgAlt: "Serie New York",
                    objPosition: "20% 0%"
                },
                title: "Serie New York",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "bathroom"],
        urlSlug: "bathroom"
    },
    "vanitory-escandinavo": {
        projectSlug: "vanitory-escandinavo",
        title: "Serie Escandinavo",
        subtitle: "Vanitory",
        image: {
            imgSrc: "/assets/img/projectsPage/bathroom/escandinavo/Strong-127.webp",
            imgAlt: "Serie Escandinavo",
            objPosition: "50% 15%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/bathroom/escandinavo/Strong-127.webp",
                imgAlt: "Serie Escandinavo",
                objPosition: "50% 35%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/bathroom/escandinavo/Strong-129.webp",
                    imgAlt: "Serie Escandinavo",
                    objPosition: "50% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/bathroom/escandinavo/Strong-125.webp",
                    imgAlt: "Serie Escandinavo",
                    objPosition: "50% 50%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/bathroom/escandinavo/Strong-129.webp",
                    imgAlt: "Serie Escandinavo",
                    objPosition: "50% 0%"
                },
                title: "Serie Escandinavo",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "bathroom"],
        urlSlug: "bathroom"
    },
    "vestidor-deluxe": {
        projectSlug: "vestidor-deluxe",
        title: "Serie Deluxe",
        subtitle: "Vestidor",
        image: {
            imgSrc: "/assets/img/projectsPage/closet/deluxe/Strong_7184.webp",
            imgAlt: "Serie Deluxe",
            objPosition: "50% 90%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/closet/deluxe/Strong_7184.webp",
                imgAlt: "Serie Deluxe",
                objPosition: "50% 100%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/closet/deluxe/Strong_7186.webp",
                    imgAlt: "Serie Deluxe",
                    objPosition: "40% 90%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/closet/deluxe/Strong_7185.webp",
                    imgAlt: "Serie Deluxe",
                    objPosition: "50% 95%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/closet/deluxe/Strong_7186.webp",
                    imgAlt: "Serie Deluxe",
                    objPosition: "40% 90%"
                },
                title: "Serie Deluxe",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "closet"],
        urlSlug: "closet"
    },
    "vestidor-nordico": {
        projectSlug: "vestidor-nordico",
        title: "Serie Nordico",
        subtitle: "Vestidor",
        image: {
            imgSrc: "/assets/img/projectsPage/closet/nordico/Strong-291.webp",
            imgAlt: "Serie Nordico",
            objPosition: "0% 50%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/closet/nordico/Strong-291.webp",
                imgAlt: "Serie Nordico",
                objPosition: "40% 50%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/closet/nordico/Strong-296.webp",
                    imgAlt: "Serie Nordico",
                    objPosition: "50% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/closet/nordico/Strong-293.webp",
                    imgAlt: "Serie Nordico",
                    objPosition: "100% 100%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/closet/nordico/Strong-296.webp",
                    imgAlt: "Serie Nordico",
                    objPosition: "50% 0%"
                },
                title: "Serie Nordico",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "closet"],
        urlSlug: "closet"
    },
    "placar-urbanwood": {
        projectSlug: "placar-urbanwood",
        title: "Serie Urbanwood",
        subtitle: "Placar",
        image: {
            imgSrc: "/assets/img/projectsPage/closet/urbanwood/Strong-153.webp",
            imgAlt: "Serie Urbanwood",
            objPosition: "0% 40%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/closet/urbanwood/Strong-153.webp",
                imgAlt: "Serie Urbanwood",
                objPosition: "50% 90%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/closet/urbanwood/Strong-urbanwood.webp",
                    imgAlt: "Serie Urbanwood",
                    objPosition: "40% 100%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/closet/urbanwood/Strong-152.webp",
                    imgAlt: "Serie Urbanwood",
                    objPosition: "30% 50%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/closet/urbanwood/Strong-urbanwood.webp",
                    imgAlt: "Serie Urbanwood",
                    objPosition: "40% 100%"
                },
                title: "Serie Urbanwood",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "closet"],
        urlSlug: "closet"
    },
    // "vestidor-fusion": {
    //     projectSlug: "vestidor-fusion",
    //     title: "Serie Fusión",
    //     subtitle: "Vestidor",
    //     image: {
    //         imgSrc: "/assets/img/projectsPage/homePage/banner/test.jpg",
    //         imgAlt: "vestidor-fusion",
    //         objPosition: "center center"
    //     },
    // year: "2022",
    // location: "Buenos Aires, Argentina",     
    // details: {
    //         portraitImg: {
    //             imgSrc: "/assets/img/projectsPage/homePage/banner/test.jpg",
    //             imgAlt: "cocina-nordica",
    //             objPosition: "center center"
    //         },
    //     },
    //     categories: ["all", "closet"],
    //     urlSlug: "closet"
    // },
    "escritorio": {
        projectSlug: "escritorio",
        title: "Escritorio",
        subtitle: "Escritorio",
        image: {
            imgSrc: "/assets/img/projectsPage/bedroom/escritorio/Strong-120.webp",
            imgAlt: "Escritorio",
            objPosition: "15% 100%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/bedroom/escritorio/Strong-120.webp",
                imgAlt: "Escritorio",
                objPosition: "15% 100%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/bedroom/escritorio/Strong-123.webp",
                    imgAlt: "Escritorio",
                    objPosition: "50% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/bedroom/escritorio/Strong-119.webp",
                    imgAlt: "Escritorio",
                    objPosition: "40% 50%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/bedroom/escritorio/Strong-123.webp",
                    imgAlt: "Escritorio",
                    objPosition: "50% 0%"
                },
                title: "Escritorio",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "bedroom"],
        urlSlug: "bedroom"
    },
    // "cama-individual": {
    //     projectSlug: "cama-individual",
    //     title: "Cama Individual",
    //     subtitle: "Cama",
    //     image: {
    //         imgSrc: "/assets/img/projectsPage/homePage/banner/test.jpg",
    //         imgAlt: "cama-individual",
    //         objPosition: "center center"
    //     },
    // year: "2022",
    // location: "Buenos Aires, Argentina",     
    // details: {
    //         portraitImg: {
    //             imgSrc: "/assets/img/projectsPage/homePage/banner/test.jpg",
    //             imgAlt: "cocina-nordica",
    //             objPosition: "center center"
    //         },
    //     },
    //     categories: ["all", "bedroom"],
    //     urlSlug: "bedroom"
    // },
    // "cama-matrimonial": {
    //     projectSlug: "cama-matrimonial",
    //     title: "Cama Matrimonial",
    //     subtitle: "Cama",
    //     image: {
    //         imgSrc: "/assets/img/projectsPage/homePage/banner/test.jpg",
    //         imgAlt: "cama-matrimonial",
    //         objPosition: "center center"
    //     },
    // year: "2022",
    // location: "Buenos Aires, Argentina",     
    // details: {
    //         portraitImg: {
    //             imgSrc: "/assets/img/projectsPage/homePage/banner/test.jpg",
    //             imgAlt: "cocina-nordica",
    //             objPosition: "center center"
    //         },
    //     },
    //     categories: ["all", "bedroom"],
    //     urlSlug: "bedroom"
    // },
    // "mesa-de-luz": {
    //     projectSlug: "mesa-de-luz",
    //     title: "Mesa de Luz",
    //     subtitle: "Mesa de Luz",
    //     image: {
    //         imgSrc: "/assets/img/projectsPage/homePage/banner/test.jpg",
    //         imgAlt: "mesa-de-luz",
    //         objPosition: "center center"
    //     },
    // year: "2022",
    // location: "Buenos Aires, Argentina",     
    // details: {
    //         portraitImg: {
    //             imgSrc: "/assets/img/projectsPage/homePage/banner/test.jpg",
    //             imgAlt: "cocina-nordica",
    //             objPosition: "center center"
    //         },
    //     },
    //     categories: ["all", "bedroom"],
    //     urlSlug: "bedroom"
    // },
    // "comoda": {
    //     projectSlug: "comoda",
    //     title: "Comoda",
    //     subtitle: "Comoda",
    //     image: {
    //         imgSrc: "/assets/img/projectsPage/homePage/banner/test.jpg",
    //         imgAlt: "comoda",
    //         objPosition: "center center"
    //     },
    // year: "2022",
    // location: "Buenos Aires, Argentina",     
    // details: {
    //         portraitImg: {
    //             imgSrc: "/assets/img/projectsPage/homePage/banner/test.jpg",
    //             imgAlt: "cocina-nordica",
    //             objPosition: "center center"
    //         },
    //     },
    //     categories: ["all", "bedroom"],
    //     urlSlug: "bedroom"
    // },
    "estanteria-avila": {
        projectSlug: "estanteria-avila",
        title: "Estanteria Avila",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/estanteriaAvila/Strong_Wood_IG-80.webp",
            imgAlt: "Estanteria Avila",
            objPosition: "0% 65%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/estanteriaAvila/Strong_Wood_IG-80.webp",
                imgAlt: "Estanteria Avila",
                objPosition: "20% 65%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/estanteriaAvila/Strong_Wood_IG-77.webp",
                    imgAlt: "Estanteria Avila",
                    objPosition: "0% 50%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/estanteriaAvila/Strong_Wood_IG-78.webp",
                    imgAlt: "Estanteria Avila",
                    objPosition: "60% 100%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/estanteriaAvila/Strong_Wood_IG-81.webp",
                imgAlt: "Estanteria Avila",
                objPosition: "70% 100%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/estanteriaAvila/Strong_Wood_IG-77.webp",
                    imgAlt: "Estanteria Avila",
                    objPosition: "0% 50%"
                },
                title: "Estanteria Avila",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "maceta-avinon": {
        projectSlug: "maceta-avinon",
        title: "Maceta Aviñon",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/macetaAvinon/Strong_Wood_IG-47.webp",
            imgAlt: "Maceta Aviñon",
            objPosition: "30% 100%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/macetaAvinon/Strong_Wood_IG-47.webp",
                imgAlt: "Maceta Aviñon",
                objPosition: "35% 45%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/macetaAvinon/Strong_Wood_IG-48.webp",
                    imgAlt: "Maceta Aviñon",
                    objPosition: "30% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/macetaAvinon/Strong_Wood_IG-46.webp",
                    imgAlt: "Maceta Aviñon",
                    objPosition: "0% 100%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/macetaAvinon/Strong_Wood_IG-45.webp",
                imgAlt: "Maceta Aviñon",
                objPosition: "30% 73%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/macetaAvinon/Strong_Wood_IG-48.webp",
                    imgAlt: "Maceta Aviñon",
                    objPosition: "30% 0%"
                },
                title: "Maceta Aviñon",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "porta-vinos": {
        projectSlug: "porta-vinos",
        title: "Porta Vinos",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/portaVinos/Strong_Wood_IG-2.webp",
            imgAlt: "Porta Vinos",
            objPosition: "50% 100%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/portaVinos/Strong_Wood_IG-2.webp",
                imgAlt: "Porta Vinos",
                objPosition: "50% 100%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/portaVinos/Strong_Wood_IG-6.webp",
                    imgAlt: "Porta Vinos",
                    objPosition: "40% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/portaVinos/Strong_Wood_IG-1.webp",
                    imgAlt: "Porta Vinos",
                    objPosition: "50% 0%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/portaVinos/Strong_Wood_IG-7.webp",
                imgAlt: "Porta Vinos",
                objPosition: "30% 100%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/portaVinos/Strong_Wood_IG-6.webp",
                    imgAlt: "Porta Vinos",
                    objPosition: "40% 0%"
                },
                title: "Porta Vinos",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "estanteria-bath": {
        projectSlug: "estanteria-bath",
        title: "Estanteria Bath",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/estanteriaBath/Strong_Wood_IG-73.webp",
            imgAlt: "Estanteria Bath",
            objPosition: "70% 40%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/estanteriaBath/Strong_Wood_IG-73.webp",
                imgAlt: "Estanteria Bath",
                objPosition: "65% 60%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/estanteriaBath/Strong_Wood_IG-74.webp",
                    imgAlt: "Estanteria Bath",
                    objPosition: "70% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/estanteriaBath/Strong_Wood_IG-71.webp",
                    imgAlt: "Estanteria Bath",
                    objPosition: "60% 60%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/estanteriaBath/Strong_Wood_IG-72.webp",
                imgAlt: "Estanteria Bath",
                objPosition: "50% 50%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/estanteriaBath/Strong_Wood_IG-74.webp",
                    imgAlt: "Estanteria Bath",
                    objPosition: "70% 0%"
                },
                title: "Estanteria Bath",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "mesa-cracovia": {
        projectSlug: "mesa-cracovia",
        title: "Mesa Cracovia",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/mesaCracovia/Strong_Wood_IG-102.webp",
            imgAlt: "Mesa Cracovia",
            objPosition: "50% 50%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/mesaCracovia/Strong_Wood_IG-102.webp",
                imgAlt: "Mesa Cracovia",
                objPosition: "50% 40%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/mesaCracovia/Strong_Wood_IG-101.webp",
                    imgAlt: "Mesa Cracovia",
                    objPosition: "0% 50%",
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/mesaCracovia/Strong_Wood_IG-103.webp",
                    imgAlt: "Mesa Cracovia",
                    objPosition: "50% 0%",
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/mesaCracovia/Strong_Wood_IG-101.webp",
                    imgAlt: "Mesa Cracovia",
                    objPosition: "0% 50%",
                },
                title: "Mesa Cracovia",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "mesa-ratona-edimburgo": {
        projectSlug: "mesa-ratona-edimburgo",
        title: "Mesa ratona Edimburgo",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/mesaRatonaEdimburgo/Strong-Wood-Set-17.webp",
            imgAlt: "Mesa ratona Edimburgo",
            objPosition: "50% 50%",
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/mesaRatonaEdimburgo/Strong-Wood-Set-17.webp",
                imgAlt: "Mesa ratona Edimburgo",
                objPosition: "50% 56%",
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/mesaRatonaEdimburgo/mesaRatonaEdimburgo2.webp",
                    imgAlt: "Mesa ratona Edimburgo",
                    objPosition: "90% 50%",
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/mesaRatonaEdimburgo/mesaRatonaEdimburgo4.webp",
                    imgAlt: "Mesa ratona Edimburgo",
                    objPosition: "0% 35%",
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/mesaRatonaEdimburgo/Strong_Wood_IG-82.webp",
                imgAlt: "Mesa ratona Edimburgo",
                objPosition: "0% 45%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/mesaRatonaEdimburgo/mesaRatonaEdimburgo2.webp",
                    imgAlt: "Mesa ratona Edimburgo",
                    objPosition: "90% 50%",
                },
                title: "Mesa ratona Edimburgo",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "maceta-sintra": {
        projectSlug: "maceta-sintra",
        title: "Maceta Sintra",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/macetaSintra/Strong_Wood_IG-43.webp",
            imgAlt: "Maceta Sintra",
            objPosition: "0% 65%",
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/macetaSintra/Strong_Wood_IG-43.webp",
                imgAlt: "Maceta Sintra",
                objPosition: "7% 65%",
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/macetaSintra/Strong_Wood_IG-40.webp",
                    imgAlt: "Maceta Sintra",
                    objPosition: "25% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/macetaSintra/Strong_Wood_IG-42.webp",
                    imgAlt: "Maceta Sintra",
                    objPosition: "40% 0%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/macetaSintra/Strong_Wood_IG-41.webp",
                imgAlt: "Maceta Sintra",
                objPosition: "50% 15%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/macetaSintra/Strong_Wood_IG-40.webp",
                    imgAlt: "Maceta Sintra",
                    objPosition: "25% 0%"
                },
                title: "Maceta Sintra",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "estanteria-siena": {
        projectSlug: "estanteria-siena",
        title: "Estanteria Siena",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/estanteriaSiena/Strong_Wood_IG-97.webp",
            imgAlt: "Estanteria Siena",
            objPosition: "50% 50%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/estanteriaSiena/Strong_Wood_IG-97.webp",
                imgAlt: "Estanteria Siena",
                objPosition: "45% 20%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/estanteriaSiena/Strong_Wood_IG-98.webp",
                    imgAlt: "Estanteria Siena",
                    objPosition: "40% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/estanteriaSiena/Strong_Wood_IG-95.webp",
                    imgAlt: "Estanteria Siena",
                    objPosition: "50% 45%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/estanteriaSiena/Strong_Wood_IG-99.webp",
                imgAlt: "Estanteria Siena",
                objPosition: "45% 10%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/estanteriaSiena/Strong_Wood_IG-98.webp",
                    imgAlt: "Estanteria Siena",
                    objPosition: "40% 0%"
                },
                title: "Estanteria Siena",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    // "estanteria-bergen": {
    //     projectSlug: "estanteria-bergen",
    //     title: "Estanteria Bergen",
    //     subtitle: "Productos",
    //     image: {
    //         imgSrc: "/assets/img/projectsPage/homePage/banner/test.jpg",
    //         imgAlt: "estanteria-bergen",
    //         objPosition: "center center"
    //     },
    // year: "2022",
    // location: "Buenos Aires, Argentina",     
    // details: {
    //         portraitImg: {
    //             imgSrc: "/assets/img/projectsPage/homePage/banner/test.jpg",
    //             imgAlt: "Estanteria Bath",
    //             objPosition: "center center"
    //         },
    //     },
    //     categories: ["all", "products"],
    //     urlSlug: "products"
    // },
    "llavero-corfu": {
        projectSlug: "llavero-corfu",
        title: "Llavero Corfu",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/llaveroCorfu/Strong_Wood_IG-20.webp",
            imgAlt: "Llavero Corfu",
            objPosition: "15% 70%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/llaveroCorfu/Strong_Wood_IG-20.webp",
                imgAlt: "Llavero Corfu",
                objPosition: "25% 80%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/llaveroCorfu/Strong_Wood_IG-22.webp",
                    imgAlt: "Llavero Corfu",
                    objPosition: "100% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/llaveroCorfu/Strong_Wood_IG-23.webp",
                    imgAlt: "Llavero Corfu",
                    objPosition: "40% 35%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/llaveroCorfu/Strong_Wood_IG-21.webp",
                imgAlt: "Llavero Corfu",
                objPosition: "15% 55%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/llaveroCorfu/Strong_Wood_IG-22.webp",
                    imgAlt: "Llavero Corfu",
                    objPosition: "100% 0%"
                },
                title: "Llavero Corfu",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "leniero": {
        projectSlug: "leniero",
        title: "Leñero",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/leniero/Strong_Wood_IG-49.webp",
            imgAlt: "Leñero",
            objPosition: "0% 85%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/leniero/Strong_Wood_IG-49.webp",
                imgAlt: "Leñero",
                objPosition: "25% 87%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/leniero/Strong_Wood_IG-50.webp",
                    imgAlt: "Leñero",
                    objPosition: "10% 100%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/leniero/Strong_Wood_IG-51.webp",
                    imgAlt: "Leñero",
                    objPosition: "25% 100%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/leniero/Strong_Wood_IG-50.webp",
                    imgAlt: "Leñero",
                    objPosition: "10% 100%"
                },
                title: "Leñero",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "rack-tv-cordoba": {
        projectSlug: "rack-tv-cordoba",
        title: "Rack TV Cordoba",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/rackTvCordoba/Strong_Wood_IG-66.webp",
            imgAlt: "Rack TV Cordoba",
            objPosition: "10% 100%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/rackTvCordoba/Strong_Wood_IG-66.webp",
                imgAlt: "Rack TV Cordoba",
                objPosition: "15% 55%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/rackTvCordoba/Strong_Wood_IG-69.webp",
                    imgAlt: "Rack TV Cordoba",
                    objPosition: "0% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/rackTvCordoba/Strong_Wood_IG-67.webp",
                    imgAlt: "Rack TV Cordoba",
                    objPosition: "35% 0%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/rackTvCordoba/Strong_Wood_IG-64.webp",
                imgAlt: "Rack TV Cordoba",
                objPosition: "50% 55%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/rackTvCordoba/Strong_Wood_IG-69.webp",
                    imgAlt: "Rack TV Cordoba",
                    objPosition: "0% 0%"
                },
                title: "Rack TV Cordoba",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "toallero-matera": {
        projectSlug: "toallero-matera",
        title: "Toallero Matera",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/toalleroMatera/Strong_Wood_IG-39.webp",
            imgAlt: "Toallero Matera",
            objPosition: "50% 80%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/toalleroMatera/Strong_Wood_IG-39.webp",
                imgAlt: "Toallero Matera",
                objPosition: "50% 30%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/toalleroMatera/Strong_Wood_IG-38.webp",
                    imgAlt: "Toallero Matera",
                    objPosition: "25% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/toalleroMatera/Strong_Wood_IG-35.webp",
                    imgAlt: "Toallero Matera",
                    objPosition: "35% 20%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/toalleroMatera/Strong_Wood_IG-37.webp",
                imgAlt: "Toallero Matera",
                objPosition: "25% 20%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/toalleroMatera/Strong_Wood_IG-38.webp",
                    imgAlt: "Toallero Matera",
                    objPosition: "25% 0%"
                },
                title: "Toallero Matera",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "toallero-cuenca": {
        projectSlug: "toallero-cuenca",
        title: "Toallero Cuenca",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/toalleroCuenca/Strong_Wood_IG-12.webp",
            imgAlt: "Toallero Cuenca",
            objPosition: "0% 0%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/toalleroCuenca/Strong_Wood_IG-12.webp",
                imgAlt: "Toallero Cuenca",
                objPosition: "17% 50%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/toalleroCuenca/Strong_Wood_IG-10.webp",
                    imgAlt: "Toallero Cuenca",
                    objPosition: "50% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/toalleroCuenca/Strong_Wood_IG-14.webp",
                    imgAlt: "Toallero Cuenca",
                    objPosition: "15% 0%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/toalleroCuenca/Strong_Wood_IG-8.webp",
                imgAlt: "Toallero Cuenca",
                objPosition: "15% 30%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/toalleroCuenca/Strong_Wood_IG-10.webp",
                    imgAlt: "Toallero Cuenca",
                    objPosition: "50% 0%"
                },
                title: "Toallero Cuenca",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "bodega-segovia": {
        projectSlug: "bodega-segovia",
        title: "Bodega Segovia",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/bodegaSegovia/Strong_Wood_IG-57.webp",
            imgAlt: "Bodega Segovia",
            objPosition: "0% 70%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/bodegaSegovia/Strong_Wood_IG-57.webp",
                imgAlt: "Bodega Segovia",
                objPosition: "15% 40%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/bodegaSegovia/Strong_Wood_IG-59.webp",
                    imgAlt: "Bodega Segovia",
                    objPosition: "45% 80%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/bodegaSegovia/Strong_Wood_IG-61.webp",
                    imgAlt: "Bodega Segovia",
                    objPosition: "30% 70%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/bodegaSegovia/Strong_Wood_IG-58.webp",
                imgAlt: "Bodega Segovia",
                objPosition: "15% 47%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/bodegaSegovia/Strong_Wood_IG-59.webp",
                    imgAlt: "Bodega Segovia",
                    objPosition: "45% 80%"
                },
                title: "Bodega Segovia",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "mesa-de-luz-roma": {
        projectSlug: "mesa-de-luz-roma",
        title: "Mesa de luz Roma",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/mesaDeLuzRoma/Strong_Wood_IG-30.webp",
            imgAlt: "Mesa de luz Roma",
            objPosition: "30% 0%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/mesaDeLuzRoma/Strong_Wood_IG-30.webp",
                imgAlt: "Mesa de luz Roma",
                objPosition: "30% 20%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/mesaDeLuzRoma/Strong_Wood_IG-32.webp",
                    imgAlt: "Mesa de luz Roma",
                    objPosition: "50% 50%",
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/mesaDeLuzRoma/Strong_Wood_IG-28.webp",
                    imgAlt: "Mesa de luz Roma",
                    objPosition: "50% 10%",
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/mesaDeLuzRoma/Strong_Wood_IG-33.webp",
                imgAlt: "Mesa de luz Roma",
                objPosition: "50% 50%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/mesaDeLuzRoma/Strong_Wood_IG-32.webp",
                    imgAlt: "Mesa de luz Roma",
                    objPosition: "50% 50%",
                },
                title: "Mesa de luz Roma",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "escritorio-brujas": {
        projectSlug: "escritorio-brujas",
        title: "Escritorio Brujas",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/escritorioBrujas/Strong_Wood_IG-90.webp",
            imgAlt: "Escritorio Brujas",
            objPosition: "50% 20%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/escritorioBrujas/Strong_Wood_IG-90.webp",
                imgAlt: "Escritorio Brujas",
                objPosition: "50% 0%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/escritorioBrujas/Strong_Wood_IG-92.webp",
                    imgAlt: "Escritorio Brujas",
                    objPosition: "50% 0%",
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/escritorioBrujas/Strong_Wood_IG-91.webp",
                    imgAlt: "Escritorio Brujas",
                    objPosition: "30% 0%",
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/escritorioBrujas/Strong_Wood_IG-94.webp",
                imgAlt: "Escritorio Brujas",
                objPosition: "20% 20%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/escritorioBrujas/Strong_Wood_IG-92.webp",
                    imgAlt: "Escritorio Brujas",
                    objPosition: "50% 0%",
                },
                title: "Escritorio Brujas",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "perchero-oporto": {
        projectSlug: "perchero-oporto",
        title: "Perchero Oporto",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/percheroOporto/Strong_Wood_IG-26.webp",
            imgAlt: "Perchero Oporto",
            objPosition: "60% 50%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/percheroOporto/Strong_Wood_IG-26.webp",
                imgAlt: "Perchero Oporto",
                objPosition: "45% 25%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/percheroOporto/Strong_Wood_IG-24.webp",
                    imgAlt: "Perchero Oporto",
                    objPosition: "55% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/percheroOporto/Strong_Wood_IG-25.webp",
                    imgAlt: "Perchero Oporto",
                    objPosition: "25% 0%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/percheroOporto/Strong_Wood_IG-24.webp",
                    imgAlt: "Perchero Oporto",
                    objPosition: "55% 0%"
                },
                title: "Perchero Oporto",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "recibidor-salamanca": {
        projectSlug: "recibidor-salamanca",
        title: "Recibidor Salamanca",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/recibidorSalamanca/Strong_Wood_IG-52.webp",
            imgAlt: "Recibidor Salamanca",
            objPosition: "40% 50%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/recibidorSalamanca/Strong_Wood_IG-52.webp",
                imgAlt: "Recibidor Salamanca",
                objPosition: "40% 45%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/recibidorSalamanca/Strong_Wood_IG-55.webp",
                    imgAlt: "Recibidor Salamanca",
                    objPosition: "25% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/recibidorSalamanca/Strong_Wood_IG-56.webp",
                    imgAlt: "Recibidor Salamanca",
                    objPosition: "25% 0%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/recibidorSalamanca/Strong_Wood_IG-53.webp",
                imgAlt: "Recibidor Salamanca",
                objPosition: "35% 87%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/recibidorSalamanca/Strong_Wood_IG-55.webp",
                    imgAlt: "Recibidor Salamanca",
                    objPosition: "25% 0%"
                },
                title: "Recibidor Salamanca",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "tabla-asado": {
        projectSlug: "tabla-asado",
        title: "Tabla Asado",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/tablaAsado/Strongwood_Tabla_parri-4.webp",
            imgAlt: "Tabla Asado",
            objPosition: "80% 50%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/tablaAsado/Strongwood_Tabla_parri-4.webp",
                imgAlt: "Tabla Asado",
                objPosition: "80% 85%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/tablaAsado/Strongwood_Tabla_parri-10.webp",
                    imgAlt: "Tabla Asado",
                    objPosition: "60% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/tablaAsado/Strongwood_Tabla_parri-3.webp",
                    imgAlt: "Tabla Asado",
                    objPosition: "40% 0%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/tablaAsado/Strongwood_Tabla_parri-7.webp",
                imgAlt: "Tabla Asado",
                objPosition: "50% 80%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/tablaAsado/Strongwood_Tabla_parri-10.webp",
                    imgAlt: "Tabla Asado",
                    objPosition: "60% 0%"
                },
                title: "Tabla Asado",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "soporte-auricular": {
        projectSlug: "soporte-auricular",
        title: "Soporte Auricular",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/projectsPage/products/soporteAuricular/Strong_Wood_IG-93.webp",
            imgAlt: "Soporte Auricular",
            objPosition: "90% 0%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/products/soporteAuricular/Strong_Wood_IG-93.webp",
                imgAlt: "Soporte Auricular",
                objPosition: "80% 0%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/products/soporteAuricular/soporteAuricular3.webp",
                    imgAlt: "Soporte Auricular",
                    objPosition: "30% 75%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/soporteAuricular/soporteAuricular1.webp",
                    imgAlt: "Soporte Auricular",
                    objPosition: "60% 0%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/soporteAuricular/soporteAuricular3.webp",
                    imgAlt: "Soporte Auricular",
                    objPosition: "30% 75%"
                },
                title: "Soporte Auricular",
                description: [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum. In bibendum ex ac odio sagittis, non euismod lectus fringilla.",
                    " Phasellus ut tortor vel libero viverra suscipit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat nunc sed erat laoreet, nec gravida odio dictum.",
                ],
                footer: {
                    materials: ["Melamina, ", " Hierro"],
                    propousal: ["Refacción cocina"],
                    year: ["2022"],
                    location: ["Buenos Aires, ", " Argentina"],
                }
            }
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
}