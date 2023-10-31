import Image from "next/image"
import styles from "./VerticalImgComponent.module.scss"
import { ImgDataInterface } from "@/types"

export default function VerticalImgComponent({ imageData }: { imageData: ImgDataInterface }) {
    return (
        <div className={`${styles["container-outer-verticalImg"]} `}>
            <Image
                src={imageData.imgSrc}
                alt={imageData.imgAlt}
                fill
                priority
                style={{ objectPosition: imageData.objPosition }}
                className={`${styles["container-inner-image"]}`}
                sizes="(max-width:1400px) 26rem, (max-width:1200px) 24rem,(max-width: 992px) 18rem, (max-width: 768px) 94vw, 28rem"
            />
        </div>
    )
}