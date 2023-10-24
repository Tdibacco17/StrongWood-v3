import Image from "next/image"
import styles from "./ColumnCardComponent.module.scss"
import { useState } from "react"
import { ImgDataInterface } from "@/types"
import ImgPlaceholderComponent from "@/components/ImgPlaceholderComponent/ImgPlaceholderComponent"

export default function ColumnCardComponent({ imageData, index }: { imageData: ImgDataInterface, index: number }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <>
            {
                !imageLoaded &&
                <ImgPlaceholderComponent sectionImg={index === 1 ? "secondTwoSmall" : "firstTwoSmall"} />
            }
            <div className={`${imageLoaded && styles["container-outer-image"]} ${index === 1 && styles["second"]}`}>
                <Image
                    src={imageData.imgSrc}
                    alt={imageData.imgAlt}
                    fill
                    style={{ objectPosition: imageData.objPosition, opacity: imageLoaded ? "1" : "0" }}
                    className={`${styles["container-inner-image"]}`}
                    onLoadingComplete={() => { setImageLoaded(true) }}
                />
            </div>
        </>
    )
}