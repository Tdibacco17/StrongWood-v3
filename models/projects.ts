import { ProjectDataInterface } from "@/types";

export const projectsCategories = ["all", "kitchen", "bathroom", "closet", "bedroom", "products"]

export const projectsData: ProjectDataInterface = {
    "cocina-nordica": {
        projectSlug: "cocina-nordica",
        title: "Serie Nordica",
        subtitle: "Cocina",
        image: {
            imgSrc: "/assets/img/kitchen/nordica/Strong-208.webp",
            imgAlt: "Serie Nordica",
            objPosition: "50% 55%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/kitchen/nordica/Strong-208.webp",
                imgAlt: "Serie Nordica",
                objPosition: "50% 80%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/kitchen/nordica/Strong-225.webp",
                    imgAlt: "Serie Nordica",
                    objPosition: "40% 0%"
                },
                {
                    imgSrc: "/assets/img/kitchen/nordica/Strong-234.webp",
                    imgAlt: "Serie Nordica",
                    objPosition: "60% 0%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/kitchen/nordica/Strong-239.webp",
                imgAlt: "Serie Nordica",
                objPosition: "50% 55%"
            }
        },
        categories: ["all", "kitchen"],
        urlSlug: "kitchen"
    },
    "cocina-new-york": {
        projectSlug: "cocina-new-york",
        title: "Serie New York",
        subtitle: "Cocina",
        image: {
            imgSrc: "/assets/img/kitchen/newYork/Strong-142.webp",
            imgAlt: "Serie New York",
            objPosition: "50% 25%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/kitchen/newYork/Strong-142.webp",
                imgAlt: "Serie New York",
                objPosition: "20% 40%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/kitchen/newYork/Strong-149.webp",
                    imgAlt: "Serie New York",
                    objPosition: "55% 50%",
                },
                {
                    imgSrc: "/assets/img/kitchen/newYork/Strong-140.webp",
                    imgAlt: "Serie New York",
                    objPosition: "25% 35%",
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/kitchen/newYork/Strong-146.webp",
                imgAlt: "Serie New York",
                objPosition: "30% 40%",
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
            imgSrc: "/assets/img/kitchen/premium/Strong-266.webp",
            imgAlt: "Serie Premium",
            objPosition: "50% 50%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/kitchen/premium/Strong-266.webp",
                imgAlt: "Serie Premium",
                objPosition: "50% 55%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/kitchen/premium/Strong-272.webp",
                    imgAlt: "Serie Premium",
                    objPosition: "50% 0%",
                },
                {
                    imgSrc: "/assets/img/kitchen/premium/Strong-275.webp",
                    imgAlt: "Serie Premium",
                    objPosition: "25% 35%",
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/kitchen/premium/Strong-284.webp",
                imgAlt: "Serie Premium",
                objPosition: "30% 40%",
            }
        },
        categories: ["all", "kitchen"],
        urlSlug: "kitchen"
    },
    "cocina-nova": {
        projectSlug: "cocina-nova",
        title: "Serie Nova",
        subtitle: "Cocina",
        image: {
            imgSrc: "/assets/img/kitchen/nova/Strong-cocina-003.webp",
            imgAlt: "Serie Nova",
            objPosition: "0% 50%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/kitchen/nova/Strong-cocina-003.webp",
                imgAlt: "Serie Nova",
                objPosition: "50% 50%"
            },
        },
        categories: ["all", "kitchen"],
        urlSlug: "kitchen"
    },
    "cocina-deluxe": {
        projectSlug: "cocina-deluxe",
        title: "Serie Deluxe",
        subtitle: "Cocina",
        image: {
            imgSrc: "/assets/img/kitchen/deluxe/Strong-cocina-000.webp",
            imgAlt: "Serie Deluxe",
            objPosition: "80% 50%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/kitchen/deluxe/Strong-cocina-000.webp",
                imgAlt: "Serie Deluxe",
                objPosition: "50% 70%"
            },
        },
        categories: ["all", "kitchen"],
        urlSlug: "kitchen"
    },
    "vanitory-new-york": {
        projectSlug: "vanitory-new-york",
        title: "Serie New York",
        subtitle: "Vanitory",
        image: {
            imgSrc: "/assets/img/bathroom/newYork/Strong-300.webp",
            imgAlt: "Serie New York",
            objPosition: "45% 50%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/bathroom/newYork/Strong-300.webp",
                imgAlt: "Serie New York",
                objPosition: "45% 0%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/bathroom/newYork/Strong-302.webp",
                    imgAlt: "Serie New York",
                    objPosition: "20% 0%"
                },
                {
                    imgSrc: "/assets/img/bathroom/newYork/Strong-299.webp",
                    imgAlt: "Serie New York",
                    objPosition: "50% 0%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/bathroom/newYork/Strong-298.webp",
                imgAlt: "Serie New York",
                objPosition: "50% 50%"
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
            imgSrc: "/assets/img/bathroom/escandinavo/Strong-127.webp",
            imgAlt: "Serie Escandinavo",
            objPosition: "50% 15%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/bathroom/escandinavo/Strong-127.webp",
                imgAlt: "Serie Escandinavo",
                objPosition: "50% 35%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/bathroom/escandinavo/Strong-129.webp",
                    imgAlt: "Serie Escandinavo",
                    objPosition: "50% 0%"
                },
                {
                    imgSrc: "/assets/img/bathroom/escandinavo/Strong-125.webp",
                    imgAlt: "Serie Escandinavo",
                    objPosition: "50% 50%"
                }
            ],
        },
        categories: ["all", "bathroom"],
        urlSlug: "bathroom"
    },
    "vanitory-nordico": {
        projectSlug: "vanitory-nordico",
        title: "Serie Nordico",
        subtitle: "Vanitory",
        image: {
            imgSrc: "/assets/img/bathroom/nordico/Strong-241.webp",
            imgAlt: "Serie Nordico",
            objPosition: "50% 50%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/bathroom/nordico/Strong-241.webp",
                imgAlt: "Serie Nordico",
                objPosition: "50% 60%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/bathroom/nordico/Strong-243.webp",
                    imgAlt: "Serie Nordico",
                    objPosition: "50% 0%"
                },
                {
                    imgSrc: "/assets/img/bathroom/nordico/Strong-242.webp",
                    imgAlt: "Serie Nordico",
                    objPosition: "80% 100%"
                }
            ],
        },
        categories: ["all", "bathroom"],
        urlSlug: "bathroom"
    },
    "vestidor-deluxe": {
        projectSlug: "vestidor-deluxe",
        title: "Serie Deluxe",
        subtitle: "Vestidor",
        image: {
            imgSrc: "/assets/img/homePage/banner/test.jpg",
            imgAlt: "vestidor-deluxe",
            objPosition: "center center"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/homePage/banner/test.jpg",
                imgAlt: "vestidor-deluxe",
                objPosition: "center center"
            },
        },
        categories: ["all", "closet"],
        urlSlug: "closet"
    },
    "vestidor-nordico": {
        projectSlug: "vestidor-nordico",
        title: "Serie Nordico",
        subtitle: "Vestidor",
        image: {
            imgSrc: "/assets/img/closet/nordico/Strong-291.webp",
            imgAlt: "Serie Nordico",
            objPosition: "0% 50%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/closet/nordico/Strong-291.webp",
                imgAlt: "Serie Nordico",
                objPosition: "40% 50%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/closet/nordico/Strong-296.webp",
                    imgAlt: "Serie Nordico",
                    objPosition: "50% 0%"
                },
                {
                    imgSrc: "/assets/img/closet/nordico/Strong-293.webp",
                    imgAlt: "Serie Nordico",
                    objPosition: "100% 100%"
                }
            ],
        },
        categories: ["all", "closet"],
        urlSlug: "closet"
    },
    "vestidor-fusion": {
        projectSlug: "vestidor-fusion",
        title: "Serie Fusión",
        subtitle: "Vestidor",
        image: {
            imgSrc: "/assets/img/homePage/banner/test.jpg",
            imgAlt: "vestidor-fusion",
            objPosition: "center center"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/homePage/banner/test.jpg",
                imgAlt: "cocina-nordica",
                objPosition: "center center"
            },
        },
        categories: ["all", "closet"],
        urlSlug: "closet"
    },
    "placar-urbanwood": {
        projectSlug: "placar-urbanwood",
        title: "Serie Urbanwood",
        subtitle: "Placar",
        image: {
            imgSrc: "/assets/img/closet/urbanwood/Strong-153.webp",
            imgAlt: "Serie Urbanwood",
            objPosition: "0% 40%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/closet/urbanwood/Strong-153.webp",
                imgAlt: "Serie Urbanwood",
                objPosition: "50% 90%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/closet/urbanwood/Strong-urbanwood.webp",
                    imgAlt: "Serie Urbanwood",
                    objPosition: "40% 100%"
                },
                {
                    imgSrc: "/assets/img/closet/urbanwood/Strong-152.webp",
                    imgAlt: "Serie Urbanwood",
                    objPosition: "30% 50%"
                }
            ],
        },
        categories: ["all", "closet"],
        urlSlug: "closet"
    },
    "cama-individual": {
        projectSlug: "cama-individual",
        title: "Cama Individual",
        subtitle: "Cama",
        image: {
            imgSrc: "/assets/img/homePage/banner/test.jpg",
            imgAlt: "cama-individual",
            objPosition: "center center"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/homePage/banner/test.jpg",
                imgAlt: "cocina-nordica",
                objPosition: "center center"
            },
        },
        categories: ["all", "bedroom"],
        urlSlug: "bedroom"
    },
    "cama-matrimonial": {
        projectSlug: "cama-matrimonial",
        title: "Cama Matrimonial",
        subtitle: "Cama",
        image: {
            imgSrc: "/assets/img/homePage/banner/test.jpg",
            imgAlt: "cama-matrimonial",
            objPosition: "center center"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/homePage/banner/test.jpg",
                imgAlt: "cocina-nordica",
                objPosition: "center center"
            },
        },
        categories: ["all", "bedroom"],
        urlSlug: "bedroom"
    },
    "mesa-de-luz": {
        projectSlug: "mesa-de-luz",
        title: "Mesa de Luz",
        subtitle: "Mesa de Luz",
        image: {
            imgSrc: "/assets/img/homePage/banner/test.jpg",
            imgAlt: "mesa-de-luz",
            objPosition: "center center"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/homePage/banner/test.jpg",
                imgAlt: "cocina-nordica",
                objPosition: "center center"
            },
        },
        categories: ["all", "bedroom"],
        urlSlug: "bedroom"
    },
    "comoda": {
        projectSlug: "comoda",
        title: "Comoda",
        subtitle: "Comoda",
        image: {
            imgSrc: "/assets/img/homePage/banner/test.jpg",
            imgAlt: "comoda",
            objPosition: "center center"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/homePage/banner/test.jpg",
                imgAlt: "cocina-nordica",
                objPosition: "center center"
            },
        },
        categories: ["all", "bedroom"],
        urlSlug: "bedroom"
    },
    "escritorio": {
        projectSlug: "escritorio",
        title: "Escritorio",
        subtitle: "Escritorio",
        image: {
            imgSrc: "/assets/img/homePage/banner/test.jpg",
            imgAlt: "escritorio",
            objPosition: "center center"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/homePage/banner/test.jpg",
                imgAlt: "cocina-nordica",
                objPosition: "center center"
            },
        },
        categories: ["all", "bedroom"],
        urlSlug: "bedroom"
    },
    "estanteria-avila": {
        projectSlug: "estanteria-avila",
        title: "Estanteria Avila",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/products/estanteriaAvila/Strong_Wood_IG-80.webp",
            imgAlt: "Estanteria Avila",
            objPosition: "0% 65%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/estanteriaAvila/Strong_Wood_IG-80.webp",
                imgAlt: "Estanteria Avila",
                objPosition: "20% 65%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/estanteriaAvila/Strong_Wood_IG-77.webp",
                    imgAlt: "Estanteria Avila",
                    objPosition: "0% 50%"
                },
                {
                    imgSrc: "/assets/img/products/estanteriaAvila/Strong_Wood_IG-78.webp",
                    imgAlt: "Estanteria Avila",
                    objPosition: "60% 100%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/estanteriaAvila/Strong_Wood_IG-81.webp",
                imgAlt: "Estanteria Avila",
                objPosition: "70% 100%"
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
            imgSrc: "/assets/img/products/mesaCracovia/Strong_Wood_IG-102.webp",
            imgAlt: "Mesa Cracovia",
            objPosition: "50% 50%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/mesaCracovia/Strong_Wood_IG-102.webp",
                imgAlt: "Mesa Cracovia",
                objPosition: "50% 40%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/mesaCracovia/Strong_Wood_IG-101.webp",
                    imgAlt: "Mesa Cracovia",
                    objPosition: "0% 50%",
                },
                {
                    imgSrc: "/assets/img/products/mesaCracovia/Strong_Wood_IG-103.webp",
                    imgAlt: "Mesa Cracovia",
                    objPosition: "50% 0%",
                }
            ]
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "mesa-ratona-edimburgo": {
        projectSlug: "mesa-ratona-edimburgo",
        title: "Mesa ratona Edimburgo",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/products/mesaRatonaEdimburgo/Strong-Wood-Set-17.webp",
            imgAlt: "Mesa ratona Edimburgo",
            objPosition: "50% 50%",
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/mesaRatonaEdimburgo/Strong-Wood-Set-17.webp",
                imgAlt: "Mesa ratona Edimburgo",
                objPosition: "50% 56%",
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/mesaRatonaEdimburgo/mesaRatonaEdimburgo2.webp",
                    imgAlt: "Mesa ratona Edimburgo",
                    objPosition: "90% 50%",
                },
                {
                    imgSrc: "/assets/img/products/mesaRatonaEdimburgo/mesaRatonaEdimburgo4.webp",
                    imgAlt: "Mesa ratona Edimburgo",
                    objPosition: "0% 35%",
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/mesaRatonaEdimburgo/Strong_Wood_IG-82.webp",
                imgAlt: "Mesa ratona Edimburgo",
                objPosition: "0% 45%",
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
            imgSrc: "/assets/img/products/macetaSintra/Strong_Wood_IG-43.webp",
            imgAlt: "Maceta Sintra",
            objPosition: "0% 65%",
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/macetaSintra/Strong_Wood_IG-43.webp",
                imgAlt: "Maceta Sintra",
                objPosition: "7% 65%",
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/macetaSintra/Strong_Wood_IG-40.webp",
                    imgAlt: "Maceta Sintra",
                    objPosition: "25% 0%"
                },
                {
                    imgSrc: "/assets/img/products/macetaSintra/Strong_Wood_IG-42.webp",
                    imgAlt: "Maceta Sintra",
                    objPosition: "40% 0%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/macetaSintra/Strong_Wood_IG-41.webp",
                imgAlt: "Maceta Sintra",
                objPosition: "50% 15%"
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
            imgSrc: "/assets/img/products/macetaAvinon/Strong_Wood_IG-47.webp",
            imgAlt: "Maceta Aviñon",
            objPosition: "30% 100%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/macetaAvinon/Strong_Wood_IG-47.webp",
                imgAlt: "Maceta Aviñon",
                objPosition: "35% 45%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/macetaAvinon/Strong_Wood_IG-48.webp",
                    imgAlt: "Maceta Aviñon",
                    objPosition: "30% 0%"
                },
                {
                    imgSrc: "/assets/img/products/macetaAvinon/Strong_Wood_IG-46.webp",
                    imgAlt: "Maceta Aviñon",
                    objPosition: "0% 100%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/macetaAvinon/Strong_Wood_IG-45.webp",
                imgAlt: "Maceta Aviñon",
                objPosition: "30% 73%"
            },
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "estanteria-siena": {
        projectSlug: "estanteria-siena",
        title: "Estanteria Siena",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/products/estanteriaSiena/Strong_Wood_IG-97.webp",
            imgAlt: "Estanteria Siena",
            objPosition: "50% 50%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/estanteriaSiena/Strong_Wood_IG-97.webp",
                imgAlt: "Estanteria Siena",
                objPosition: "45% 20%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/estanteriaSiena/Strong_Wood_IG-98.webp",
                    imgAlt: "Estanteria Siena",
                    objPosition: "40% 0%"
                },
                {
                    imgSrc: "/assets/img/products/estanteriaSiena/Strong_Wood_IG-95.webp",
                    imgAlt: "Estanteria Siena",
                    objPosition: "50% 45%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/estanteriaSiena/Strong_Wood_IG-99.webp",
                imgAlt: "Estanteria Siena",
                objPosition: "45% 10%"
            },
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "porta-vinos": {
        projectSlug: "porta-vinos",
        title: "Porta Vinos",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/products/portaVinos/Strong_Wood_IG-2.webp",
            imgAlt: "Porta Vinos",
            objPosition: "50% 100%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/portaVinos/Strong_Wood_IG-2.webp",
                imgAlt: "Porta Vinos",
                objPosition: "50% 100%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/portaVinos/Strong_Wood_IG-6.webp",
                    imgAlt: "Porta Vinos",
                    objPosition: "40% 0%"
                },
                {
                    imgSrc: "/assets/img/products/portaVinos/Strong_Wood_IG-1.webp",
                    imgAlt: "Porta Vinos",
                    objPosition: "50% 0%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/portaVinos/Strong_Wood_IG-7.webp",
                imgAlt: "Porta Vinos",
                objPosition: "30% 100%"
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
            imgSrc: "/assets/img/products/estanteriaBath/Strong_Wood_IG-73.webp",
            imgAlt: "Estanteria Bath",
            objPosition: "70% 40%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/estanteriaBath/Strong_Wood_IG-73.webp",
                imgAlt: "Estanteria Bath",
                objPosition: "65% 60%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/estanteriaBath/Strong_Wood_IG-74.webp",
                    imgAlt: "Estanteria Bath",
                    objPosition: "70% 0%"
                },
                {
                    imgSrc: "/assets/img/products/estanteriaBath/Strong_Wood_IG-71.webp",
                    imgAlt: "Estanteria Bath",
                    objPosition: "60% 60%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/estanteriaBath/Strong_Wood_IG-72.webp",
                imgAlt: "Estanteria Bath",
                objPosition: "50% 50%"
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
    //         imgSrc: "/assets/img/homePage/banner/test.jpg",
    //         imgAlt: "estanteria-bergen",
    //         objPosition: "center center"
    //     },
    //     details: {
    //         firstLongImg: {
    //             imgSrc: "/assets/img/homePage/banner/test.jpg",
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
            imgSrc: "/assets/img/products/llaveroCorfu/Strong_Wood_IG-20.webp",
            imgAlt: "Llavero Corfu",
            objPosition: "15% 70%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/llaveroCorfu/Strong_Wood_IG-20.webp",
                imgAlt: "Llavero Corfu",
                objPosition: "25% 80%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/llaveroCorfu/Strong_Wood_IG-22.webp",
                    imgAlt: "Llavero Corfu",
                    objPosition: "100% 0%"
                },
                {
                    imgSrc: "/assets/img/products/llaveroCorfu/Strong_Wood_IG-23.webp",
                    imgAlt: "Llavero Corfu",
                    objPosition: "40% 35%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/llaveroCorfu/Strong_Wood_IG-21.webp",
                imgAlt: "Llavero Corfu",
                objPosition: "15% 55%"
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
            imgSrc: "/assets/img/products/leniero/Strong_Wood_IG-49.webp",
            imgAlt: "Leñero",
            objPosition: "0% 85%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/leniero/Strong_Wood_IG-49.webp",
                imgAlt: "Leñero",
                objPosition: "25% 87%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/leniero/Strong_Wood_IG-50.webp",
                    imgAlt: "Leñero",
                    objPosition: "10% 100%"
                },
                {
                    imgSrc: "/assets/img/products/leniero/Strong_Wood_IG-51.webp",
                    imgAlt: "Leñero",
                    objPosition: "25% 100%"
                }
            ],
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "rack-tv-cordoba": {
        projectSlug: "rack-tv-cordoba",
        title: "Rack TV Cordoba",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/products/rackTvCordoba/Strong_Wood_IG-66.webp",
            imgAlt: "Rack TV Cordoba",
            objPosition: "10% 100%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/rackTvCordoba/Strong_Wood_IG-66.webp",
                imgAlt: "Rack TV Cordoba",
                objPosition: "15% 55%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/rackTvCordoba/Strong_Wood_IG-69.webp",
                    imgAlt: "Rack TV Cordoba",
                    objPosition: "0% 0%"
                },
                {
                    imgSrc: "/assets/img/products/rackTvCordoba/Strong_Wood_IG-67.webp",
                    imgAlt: "Rack TV Cordoba",
                    objPosition: "35% 0%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/rackTvCordoba/Strong_Wood_IG-64.webp",
                imgAlt: "Rack TV Cordoba",
                objPosition: "50% 55%"
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
            imgSrc: "/assets/img/products/toalleroMatera/Strong_Wood_IG-39.webp",
            imgAlt: "Toallero Matera",
            objPosition: "50% 80%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/toalleroMatera/Strong_Wood_IG-39.webp",
                imgAlt: "Toallero Matera",
                objPosition: "50% 30%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/toalleroMatera/Strong_Wood_IG-38.webp",
                    imgAlt: "Toallero Matera",
                    objPosition: "25% 0%"
                },
                {
                    imgSrc: "/assets/img/products/toalleroMatera/Strong_Wood_IG-35.webp",
                    imgAlt: "Toallero Matera",
                    objPosition: "35% 20%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/toalleroMatera/Strong_Wood_IG-37.webp",
                imgAlt: "Toallero Matera",
                objPosition: "25% 20%"
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
            imgSrc: "/assets/img/products/toalleroCuenca/Strong_Wood_IG-12.webp",
            imgAlt: "Toallero Cuenca",
            objPosition: "0% 0%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/toalleroCuenca/Strong_Wood_IG-12.webp",
                imgAlt: "Toallero Cuenca",
                objPosition: "17% 50%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/toalleroCuenca/Strong_Wood_IG-10.webp",
                    imgAlt: "Toallero Cuenca",
                    objPosition: "50% 0%"
                },
                {
                    imgSrc: "/assets/img/products/toalleroCuenca/Strong_Wood_IG-14.webp",
                    imgAlt: "Toallero Cuenca",
                    objPosition: "15% 0%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/toalleroCuenca/Strong_Wood_IG-8.webp",
                imgAlt: "Toallero Cuenca",
                objPosition: "15% 30%"
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
            imgSrc: "/assets/img/products/bodegaSegovia/Strong_Wood_IG-57.webp",
            imgAlt: "Bodega Segovia",
            objPosition: "0% 70%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/bodegaSegovia/Strong_Wood_IG-57.webp",
                imgAlt: "Bodega Segovia",
                objPosition: "15% 40%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/bodegaSegovia/Strong_Wood_IG-59.webp",
                    imgAlt: "Bodega Segovia",
                    objPosition: "45% 80%"
                },
                {
                    imgSrc: "/assets/img/products/bodegaSegovia/Strong_Wood_IG-61.webp",
                    imgAlt: "Bodega Segovia",
                    objPosition: "30% 70%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/bodegaSegovia/Strong_Wood_IG-58.webp",
                imgAlt: "Bodega Segovia",
                objPosition: "15% 47%"
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
            imgSrc: "/assets/img/products/mesaDeLuzRoma/Strong_Wood_IG-30.webp",
            imgAlt: "Mesa de luz Roma",
            objPosition: "30% 0%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/mesaDeLuzRoma/Strong_Wood_IG-30.webp",
                imgAlt: "Mesa de luz Roma",
                objPosition: "30% 20%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/mesaDeLuzRoma/Strong_Wood_IG-32.webp",
                    imgAlt: "Mesa de luz Roma",
                    objPosition: "50% 50%",
                },
                {
                    imgSrc: "/assets/img/products/mesaDeLuzRoma/Strong_Wood_IG-28.webp",
                    imgAlt: "Mesa de luz Roma",
                    objPosition: "50% 10%",
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/mesaDeLuzRoma/Strong_Wood_IG-33.webp",
                imgAlt: "Mesa de luz Roma",
                objPosition: "50% 50%",
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
            imgSrc: "/assets/img/products/escritorioBrujas/Strong_Wood_IG-90.webp",
            imgAlt: "Escritorio Brujas",
            objPosition: "50% 20%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/escritorioBrujas/Strong_Wood_IG-90.webp",
                imgAlt: "Escritorio Brujas",
                objPosition: "50% 0%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/escritorioBrujas/Strong_Wood_IG-92.webp",
                    imgAlt: "Escritorio Brujas",
                    objPosition: "50% 0%",
                },
                {
                    imgSrc: "/assets/img/products/escritorioBrujas/Strong_Wood_IG-91.webp",
                    imgAlt: "Escritorio Brujas",
                    objPosition: "30% 0%",
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/escritorioBrujas/Strong_Wood_IG-94.webp",
                imgAlt: "Escritorio Brujas",
                objPosition: "20% 20%",
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
            imgSrc: "/assets/img/products/percheroOporto/Strong_Wood_IG-26.webp",
            imgAlt: "Perchero Oporto",
            objPosition: "60% 50%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/percheroOporto/Strong_Wood_IG-26.webp",
                imgAlt: "Perchero Oporto",
                objPosition: "45% 25%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/percheroOporto/Strong_Wood_IG-24.webp",
                    imgAlt: "Perchero Oporto",
                    objPosition: "55% 0%"
                },
                {
                    imgSrc: "/assets/img/products/percheroOporto/Strong_Wood_IG-25.webp",
                    imgAlt: "Perchero Oporto",
                    objPosition: "25% 0%"
                }
            ],
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
    "recibidor-salamanca": {
        projectSlug: "recibidor-salamanca",
        title: "Recibidor Salamanca",
        subtitle: "Productos",
        image: {
            imgSrc: "/assets/img/products/recibidorSalamanca/Strong_Wood_IG-52.webp",
            imgAlt: "Recibidor Salamanca",
            objPosition: "40% 50%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/recibidorSalamanca/Strong_Wood_IG-52.webp",
                imgAlt: "Recibidor Salamanca",
                objPosition: "40% 45%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/recibidorSalamanca/Strong_Wood_IG-55.webp",
                    imgAlt: "Recibidor Salamanca",
                    objPosition: "25% 0%"
                },
                {
                    imgSrc: "/assets/img/products/recibidorSalamanca/Strong_Wood_IG-56.webp",
                    imgAlt: "Recibidor Salamanca",
                    objPosition: "25% 0%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/recibidorSalamanca/Strong_Wood_IG-53.webp",
                imgAlt: "Recibidor Salamanca",
                objPosition: "35% 87%"
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
            imgSrc: "/assets/img/products/tablaAsado/Strongwood_Tabla_parri-4.webp",
            imgAlt: "Tabla Asado",
            objPosition: "80% 50%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/tablaAsado/Strongwood_Tabla_parri-4.webp",
                imgAlt: "Tabla Asado",
                objPosition: "80% 85%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/tablaAsado/Strongwood_Tabla_parri-10.webp",
                    imgAlt: "Tabla Asado",
                    objPosition: "60% 0%"
                },
                {
                    imgSrc: "/assets/img/products/tablaAsado/Strongwood_Tabla_parri-3.webp",
                    imgAlt: "Tabla Asado",
                    objPosition: "40% 0%"
                }
            ],
            reduceLongImg: {
                imgSrc: "/assets/img/products/tablaAsado/Strongwood_Tabla_parri-7.webp",
                imgAlt: "Tabla Asado",
                objPosition: "50% 80%"
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
            imgSrc: "/assets/img/products/soporteAuricular/Strong_Wood_IG-93.webp",
            imgAlt: "Soporte Auricular",
            objPosition: "90% 0%"
        },
        details: {
            firstLongImg: {
                imgSrc: "/assets/img/products/soporteAuricular/Strong_Wood_IG-93.webp",
                imgAlt: "Soporte Auricular",
                objPosition: "80% 0%"
            },
            twoSmallImg: [
                {
                    imgSrc: "/assets/img/products/soporteAuricular/soporteAuricular3.webp",
                    imgAlt: "Soporte Auricular",
                    objPosition: "30% 75%"
                },
                {
                    imgSrc: "/assets/img/products/soporteAuricular/soporteAuricular1.webp",
                    imgAlt: "Soporte Auricular",
                    objPosition: "60% 0%"
                }
            ]
        },
        categories: ["all", "products"],
        urlSlug: "products"
    },
}