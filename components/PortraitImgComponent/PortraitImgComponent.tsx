import Image from "next/image"
import styles from "./PortraitImgComponent.module.scss"
import { ImgDataInterface } from "@/types"

export default function PortraitImgComponent({
    imageData,
    projectTitle,
    projectSubtitle
}: {
    imageData: ImgDataInterface,
    projectTitle?: string,
    projectSubtitle?: string
}) {
    return (
        <div className={styles["container-section-portraitImg"]}>
            <div className={styles["container-outer-image"]}>
                <Image
                    src={imageData.imgSrc}
                    alt={imageData.imgAlt}
                    fill
                    className={styles["container-inner-image"]}
                    priority
                />
            </div>
            {projectTitle && <div className={styles["container-overlay-image"]}>
                <div className={styles["wrapper-overlay"]}>
                    <p className={styles["title-title"]}>{projectTitle}</p>
                    <p className={styles["title-subtitle"]}>{projectSubtitle}</p>
                </div>
            </div>}
        </div>
    )
}