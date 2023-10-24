import Image from "next/image"
import styles from "./LongImgComponent.module.scss"
import { ImgDataInterface } from "@/types"
import { useState } from "react";
import ImgPlaceholderComponent from "../ImgPlaceholderComponent/ImgPlaceholderComponent";

export default function LongImgComponent({
    imageData,
    projectTitle,
    projectSubtitle,
    reduce
}: {
    imageData: ImgDataInterface,
    projectTitle?: string,
    projectSubtitle?: string,
    reduce: boolean
}) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className={styles["container-section-longImg"]}>
            {
                !imageLoaded && !reduce && <ImgPlaceholderComponent sectionImg="long" />
            }
            {
                !imageLoaded && reduce && <ImgPlaceholderComponent sectionImg="long-reduce" />
            }
            <div className={`${imageLoaded && styles["container-outer-image"]} ${reduce && styles["reduce"]}`}>
                <Image
                    src={imageData.imgSrc}
                    alt={imageData.imgAlt}
                    fill
                    className={`${styles["container-inner-image"]}`}
                    style={{ objectPosition: imageData.objPosition, opacity: imageLoaded ? "1" : "0" }}
                    onLoadingComplete={() => { setImageLoaded(true) }}
                    priority
                />
            </div>
            {imageLoaded && !reduce &&
                <div className={`${styles["container-overlay-image"]}`}>
                    <div className={styles["wrapper-overlay"]}>
                        <p className={styles["title-title"]}>{projectTitle}</p>
                        <p className={styles["title-subtitle"]}>{projectSubtitle}</p>
                    </div>
                </div>}
        </div>
    )
}