import Image from "next/image"
import styles from "./TwoImagesComponent.module.scss"
import { ImgDataInterface } from "@/types"

export default function TwoImagesComponent({
    imagesData,
}: {
    imagesData: ImgDataInterface[],
}) {
    return (
        <div className={styles["container-section-twoImages"]}>
            {
                imagesData.map((imageData: ImgDataInterface, index: number) => {
                    return (
                        <div key={index} className={`${styles["container-column"]} ${index === 1 && styles["second"]}`}>
                            <div className={`${styles["container-outer-image"]} ${index === 1 && styles["second"]}`}>
                                <Image
                                    src={imageData.imgSrc}
                                    alt={imageData.imgAlt}
                                    fill
                                    className={styles["container-inner-image"]}
                                    priority
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}