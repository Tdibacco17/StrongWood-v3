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
    imagesData?: ImgDataInterface[]
    isReverse: boolean,
    technicalInfo?: TechnicalInfoInterface
}) {
    return (
        <div className={`${styles["container-section-twoImages"]} ${isReverse && styles["reverse"]}`}>
            {
                technicalInfo ?
                    <>
                        <div className={`${styles["container-column"]}`}>
                            <div className={`${styles["container-outer-info"]}`}>
                                <TechnicalInfoComponent technicalInfo={technicalInfo} />
                            </div>
                        </div>
                        <div className={`${styles["container-column"]} ${styles["second"]}`}>
                            <div className={`${styles["container-outer-image"]} ${styles["second"]}`}>
                                <Image
                                    src={technicalInfo.image.imgSrc}
                                    alt={technicalInfo.image.imgAlt}
                                    fill
                                    priority
                                    style={{ objectPosition: technicalInfo.image.objPosition }}
                                    className={`${styles["container-inner-image"]}`}
                                    sizes="(max-width: 992px) 20rem, (max-width: 768px) 94vw, 100vw"
                                />
                            </div>
                        </div>
                    </>
                    :
                    <>
                        {
                            imagesData && imagesData.map((imageData: ImgDataInterface, index: number) => {
                                return (
                                    <div key={index} className={`${styles["container-column"]} ${index === 1 && styles["second"]}`}>
                                        <div className={`${styles["container-outer-image"]} ${index === 1 && styles["second"]}`}>
                                            <Image
                                                src={imageData.imgSrc}
                                                alt={imageData.imgAlt}
                                                fill
                                                priority
                                                style={{ objectPosition: imageData.objPosition }}
                                                className={`${styles["container-inner-image"]}`}
                                                sizes="(max-width: 992px) 20rem, (max-width: 768px) 94vw, 100vw"
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
            }
        </div>
    )
}