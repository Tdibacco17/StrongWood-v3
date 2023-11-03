import { ProjectDataInterface } from "@/types/ProjectsTypes"

export const projectsCategories: string[] = ["all", "kitchen", "bathroom", "closet", "local", "bedroom", "diningroom", "products"]

export const projectsData: ProjectDataInterface = {
    homeData: {
        projectSlug: "home-data",
        title: "",
        subtitle: "",
        image: {
            "imgSrc": "/assets/img/homePage/logoStrong.webp",
            "imgAlt": "banner image",
            "objPosition": "25% 50%"
        },
        details: {
            rectangleImg: {
                imgSrc: "/assets/img/homePage/Strong-29.webp",
                imgAlt: "Serie Nova",
                objPosition: "50% 0%"
            },
            secondTwoSmallImg: [
                {
                    imgSrc: "/assets/img/homePage/Strong-10.webp",
                    imgAlt: "Home Image",
                    objPosition: "50% 50%"
                },
                {
                    imgSrc: "/assets/img/homePage/Strong-105.webp",
                    imgAlt: "Home Image",
                    objPosition: "50% 50%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/homePage/Strong-1.webp",
                    imgAlt: "Home Image",
                    objPosition: "45% 50%"
                },
                title: "Buscamos que el habitar sea una cálida experiencia.",
                description: [
                    "Somos una empresa familiar apasionada por el diseño y la fabricación de muebles excepcionales. Desde hace generaciones, hemos entregado a nuestros clientes la calidad y el cuidado en cada pieza que creamos.",
                    "Creemos que los muebles no solo deben ser meramente funcionales, sino que tambien deben representar una expresión de la belleza y personalidad de quienes los aprecian.",
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
                    imgSrc: "/assets/img/homePage/Strong-23.webp",
                    imgAlt: "Home Image",
                    objPosition: "50% 50%"
                },
                title: "Tenés un proyecto en mente? Vamos a darle vida juntos!",
                description: [
                    "Nos especializamos en diseñar y fabricar muebles a medida para todo tipo de proyectos, ya sea para hogares, oficinas o locales comerciales.",
                    "Desde la conceptualización hasta la instalación final, nos encargamos de cada paso del proceso.",
                    "Nuestro compromiso con la calidad se refleja en cada mueble que creamos, utilizando maderas selectas y técnicas artesanales."
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
                imgSrc: "/assets/img/projectsPage/kitchen/nova/STRONG-08.webp",
                imgAlt: "Serie Nova",
                objPosition: "50% 60%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/kitchen/nova/STRONG-27.webp",
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
                    imgSrc: "/assets/img/projectsPage/kitchen/newYork/Strong-156.webp",
                    imgAlt: "Serie New York",
                    objPosition: "10% 50%",
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
                    imgSrc: "/assets/img/projectsPage/kitchen/premium/Strong-270.webp",
                    imgAlt: "Serie Premium",
                    objPosition: "45% 0%",
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
                objPosition: "60% 40%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/kitchen/premium/Strong-272.webp",
                    imgAlt: "Serie Premium",
                    objPosition: "70% 0%",
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
                    imgSrc: "/assets/img/projectsPage/kitchen/nordica/Strong-215.webp",
                    imgAlt: "Serie Nordica",
                    objPosition: "85% 0%"
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
                    imgSrc: "/assets/img/projectsPage/diningroom/vajilleroLondon/Strong-132.webp",
                    imgAlt: "Vajillero",
                    objPosition: "85% 0%",
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
                    objPosition: "70% 0%",
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
                    imgSrc: "/assets/img/projectsPage/diningroom/recibidorLondon/Strong-245.webp",
                    imgAlt: "Recibidor",
                    objPosition: "10% 0%",
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
                    imgSrc: "/assets/img/projectsPage/diningroom/rackTvLondon/Strong-257.webp",
                    imgAlt: "Rack TV",
                    objPosition: "50% 50%",
                },
                {
                    imgSrc: "/assets/img/projectsPage/diningroom/rackTvLondon/IMG_2774.webp",
                    imgAlt: "Rack TV",
                    objPosition: "0% 50%",
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/diningroom/rackTvLondon/Strong-255.webp",
                imgAlt: "Rack TV",
                objPosition: "30% 100%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/diningroom/rackTvLondon/Strong-259.webp",
                    imgAlt: "Rack TV",
                    objPosition: "10% 50%",
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
    "farina-e-pane": {
        projectSlug: "farina-e-pane",
        title: "Equipamiento",
        subtitle: "Farina & Pane",
        image: {
            imgSrc: "/assets/img/projectsPage/local/farinaPane/Strong-162.webp",
            imgAlt: "Estanteria",
            objPosition: "0% 50%"
        },
        year: "2022",
        location: "Buenos Aires, Argentina",
        details: {
            portraitImg: {
                imgSrc: "/assets/img/projectsPage/local/farinaPane/Strong-162.webp",
                imgAlt: "Estanteria",
                objPosition: "25% 100%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/local/farinaPane/Strong-170.webp",
                    imgAlt: "Mostrador",
                    objPosition: "30% 0%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/local/farinaPane/Strong-177.webp",
                    imgAlt: "Mostrador",
                    objPosition: "85% 50%",
                }
            ],
            thirdTwoSmallImg: [
                {
                    imgSrc: "/assets/img/projectsPage/local/farinaPane/Strong-178.webp",
                    imgAlt: "Alacena colgante",
                    objPosition: "50% 50%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/local/farinaPane/Strong-187.webp",
                    imgAlt: "Alacena colgante",
                    objPosition: "50% 0%"
                }
            ],
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/local/farinaPane/Strong-167.webp",
                imgAlt: "Estanteria",
                objPosition: "50% 60%",
            },
            secondRectangleImg: {
                imgSrc: "/assets/img/projectsPage/local/farinaPane/Strong-182.webp",
                imgAlt: "Estanteria",
                objPosition: "0% 100%",
            },
            thirdRectangleImg: {
                imgSrc: "/assets/img/projectsPage/local/farinaPane/Strong-183.webp",
                imgAlt: "Isla",
                objPosition: "0% 15%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/local/farinaPane/Strong-165.webp",
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
                objPosition: "50% 60%"
            },
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/local/gorilaRecepcion/Strong-gorila3.webp",
                imgAlt: "Recepción",
                objPosition: "50% 55%"
            },
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
    "timo-online": {
        projectSlug: "timo-online",
        title: "Equipamiento",
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
                objPosition: "60% 80%"
            },
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/local/timoEscritorio/Strong-timo1.webp",
                imgAlt: "Cajonera & escritorio",
                objPosition: "50% 45%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/local/timoEscritorio/Strong-timo4.webp",
                    imgAlt: "Cajonera & escritorio",
                    objPosition: "50% 25%"
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
                    imgSrc: "/assets/img/projectsPage/bathroom/nordico/Strong-115.webp",
                    imgAlt: "Serie Nordico",
                    objPosition: "70% 0%"
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
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/bathroom/newYork/Strong-298.webp",
                imgAlt: "Serie New York",
                objPosition: "50% 50%"
            },
            secondRectangleImg: {
                imgSrc: "/assets/img/projectsPage/bathroom/newYork/Strong-299.webp",
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
            rectangleImg:
            {
                imgSrc: "/assets/img/projectsPage/bathroom/escandinavo/Strong-125.webp",
                imgAlt: "Serie Escandinavo",
                objPosition: "50% 55%"
            },
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
                    imgSrc: "/assets/img/projectsPage/closet/deluxe/Strong_7181.webp",
                    imgAlt: "Serie Deluxe",
                    objPosition: "40% 100%"
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
                    imgSrc: "/assets/img/projectsPage/closet/nordico/Strong-295.webp",
                    imgAlt: "Serie Nordico",
                    objPosition: "80% 0%"
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
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/closet/urbanwood/Strong-152.webp",
                    imgAlt: "Serie Urbanwood",
                    objPosition: "30% 50%"
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
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/bedroom/escritorio/Strong-118.webp",
                imgAlt: "Escritorio",
                objPosition: "15% 100%"
            },
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
                    imgSrc: "/assets/img/projectsPage/products/estanteriaAvila/Strong_Wood_Set-22.webp",
                    imgAlt: "Estanteria Avila",
                    objPosition: "55% 50%"
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
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/macetaAvinon/Strong_Wood_IG-46.webp",
                imgAlt: "Maceta Aviñon",
                objPosition: "75% 72%"
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
                    imgSrc: "/assets/img/projectsPage/products/portaVinos/Strong_Wood_IG-3.webp",
                    imgAlt: "Porta Vinos",
                    objPosition: "0% 100%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/portaVinos/Strong_Wood_IG-1.webp",
                    imgAlt: "Porta Vinos",
                    objPosition: "50% 0%"
                }
            ],
            secondRectangleImg: {
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
                    imgSrc: "/assets/img/projectsPage/products/estanteriaBath/Strong_Wood_IG-72.webp",
                    imgAlt: "Estanteria Bath",
                    objPosition: "45% 50%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/estanteriaBath/Strong_Wood_IG-71.webp",
                    imgAlt: "Estanteria Bath",
                    objPosition: "60% 60%"
                }
            ],
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
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/mesaCracovia/Strong_Wood_IG-101.webp",
                imgAlt: "Mesa Cracovia",
                objPosition: "0% 20%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/mesaCracovia/Strong_Wood_IG-103.webp",
                    imgAlt: "Mesa Cracovia",
                    objPosition: "0% 0%",
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
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/mesaRatonaEdimburgo/Strong_Wood_IG-82.webp",
                imgAlt: "Mesa ratona Edimburgo",
                objPosition: "0% 50%",
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/mesaRatonaEdimburgo/Strong_Wood_IG-83.webp",
                    imgAlt: "Mesa ratona Edimburgo",
                    objPosition: "7% 50%",
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
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/macetaSintra/Strong_Wood_IG-44.webp",
                imgAlt: "Maceta Sintra",
                objPosition: "12% 55%"
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
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/estanteriaSiena/Strong_Wood_IG-95.webp",
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
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/llaveroCorfu/Strong_Wood_IG-23.webp",
                imgAlt: "Llavero Corfu",
                objPosition: "20% 60%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/llaveroCorfu/Strong_Wood_IG-21.webp",
                    imgAlt: "Llavero Corfu",
                    objPosition: "10% 40%"
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
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/leniero/Strong_Wood_IG-50.webp",
                    imgAlt: "Leñero",
                    objPosition: "5% 100%"
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
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/rackTvCordoba/Strong_Wood_IG-69.webp",
                imgAlt: "Rack TV Cordoba",
                objPosition: "0% 85%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/rackTvCordoba/Strong_Wood_IG-67.webp",
                    imgAlt: "Rack TV Cordoba",
                    objPosition: "35% 0%"
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
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/toalleroMatera/Strong_Wood_IG-38.webp",
                imgAlt: "Toallero Matera",
                objPosition: "25% 20%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/toalleroMatera/Strong_Wood_IG-35.webp",
                    imgAlt: "Toallero Matera",
                    objPosition: "35% 20%"
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
                    imgSrc: "/assets/img/projectsPage/products/toalleroCuenca/Strong_Wood_IG-8.webp",
                    imgAlt: "Toallero Cuenca",
                    objPosition: "15% 30%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/toalleroCuenca/Strong_Wood_IG-14.webp",
                    imgAlt: "Toallero Cuenca",
                    objPosition: "15% 0%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/toalleroCuenca/Strong_Wood_IG-10.webp",
                    imgAlt: "Toallero Cuenca",
                    objPosition: "35% 0%"
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
                    imgSrc: "/assets/img/projectsPage/products/bodegaSegovia/Strong_Wood_IG-58.webp",
                    imgAlt: "Bodega Segovia",
                    objPosition: "30% 70%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/bodegaSegovia/Strong_Wood_IG-61.webp",
                    imgAlt: "Bodega Segovia",
                    objPosition: "30% 70%"
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
            rectangleImg:{
                imgSrc: "/assets/img/projectsPage/products/mesaDeLuzRoma/Strong_Wood_IG-32.webp",
                imgAlt: "Mesa de luz Roma",
                objPosition: "50% 35%",
            },
            technicalInfo: {
                image: {

                    imgSrc: "/assets/img/projectsPage/products/mesaDeLuzRoma/Strong_Wood_IG-28.webp",
                    imgAlt: "Mesa de luz Roma",
                    objPosition: "50% 15%",
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
                    imgSrc: "/assets/img/projectsPage/products/escritorioBrujas/Strong_Wood_IG-94.webp",
                    imgAlt: "Escritorio Brujas",
                    objPosition: "100% 20%",
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/escritorioBrujas/Strong_Wood_IG-91.webp",
                    imgAlt: "Escritorio Brujas",
                    objPosition: "35% 0%",
                }
            ],
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
            rectangleImg:{
                imgSrc: "/assets/img/projectsPage/products/percheroOporto/Strong_Wood_IG-24.webp",
                    imgAlt: "Perchero Oporto",
                    objPosition: "55% 70%"
            },
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/percheroOporto/Strong_Wood_IG-25.webp",
                    imgAlt: "Perchero Oporto",
                    objPosition: "10% 0%"
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
                    imgSrc: "/assets/img/projectsPage/products/recibidorSalamanca/Strong_Wood_IG-53.webp",
                    imgAlt: "Recibidor Salamanca",
                    objPosition: "35% 87%"
                },
                {
                    imgSrc: "/assets/img/projectsPage/products/recibidorSalamanca/Strong_Wood_IG-56.webp",
                    imgAlt: "Recibidor Salamanca",
                    objPosition: "20% 0%"
                }
            ],
            technicalInfo: {
                image: {
                    imgSrc: "/assets/img/projectsPage/products/recibidorSalamanca/Strong_Wood_IG-55.webp",
                    imgAlt: "Recibidor Salamanca",
                    objPosition: "40% 0%"
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
            rectangleImg: {
                imgSrc: "/assets/img/projectsPage/products/tablaAsado/Strongwood_Tabla_parri-7.webp",
                imgAlt: "Tabla Asado",
                objPosition: "40% 80%"
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
            rectangleImg:{
                imgSrc: "/assets/img/projectsPage/products/soporteAuricular/soporteAuricular1.webp",
                imgAlt: "Soporte Auricular",
                objPosition: "60% 90%"
            },
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