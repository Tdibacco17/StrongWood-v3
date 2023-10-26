import Image from "next/image"
import styles from "./TwoSmallImgComponent.module.scss"
import { ImgDataInterface } from "@/types"

export default function TwoSmallImgComponent({
    imagesData,
}: {
    imagesData: ImgDataInterface[],
}) {
    return (
        <div className={`${styles["container-section-twoImages"]}`}>
            {
                imagesData.map((imageData: ImgDataInterface, index: number) => {
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
                                    sizes="(max-width: 992px) 20rem, (max-width: 768px) 90vw, 100vw"
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}