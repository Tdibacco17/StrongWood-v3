import Image from "next/image"
import styles from "./TwoSmallImgComponent.module.scss"
import { ImgDataInterface } from "@/types"
import TechnicalInfoComponent from "../TechnicalInfoComponent/TechnicalInfoComponent"
import { TechnicalInfoInterface } from "@/types/ProjectsTypes"

export default function TwoSmallImgComponent({
    imagesData,
    isReverse,
    technicalInfo
}: {
    imagesData: ImgDataInterface[],
    isReverse: boolean,
    technicalInfo?: TechnicalInfoInterface
}) {
    return (
        <div className={`${styles["container-section-twoImages"]} ${isReverse && styles["reverse"]}`}>
            {
                imagesData.map((imageData: ImgDataInterface, index: number) => {
                    return (
                        <div key={index} className={`${styles["container-column"]} ${index === 1 && styles["second"]}`}>
                            <div className={`${index !== 1 && technicalInfo ? styles["isInfo"] : styles["container-outer-image"]} 
                                ${index === 1 && styles["second"]}`}>
                                {technicalInfo && index !== 1 ?
                                    <TechnicalInfoComponent technicalInfo={technicalInfo} />
                                    : <Image
                                        src={imageData.imgSrc}
                                        alt={imageData.imgAlt}
                                        fill
                                        priority
                                        style={{ objectPosition: imageData.objPosition }}
                                        className={`${styles["container-inner-image"]}`}
                                        sizes="(max-width: 992px) 20rem, (max-width: 768px) 94vw, 100vw"
                                    />
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}