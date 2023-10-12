import Image from 'next/image'
import styles from "./PortraitImgComponent.module.scss"
import { ImgDataInterface } from '@/types'

export default function PortraitImgComponent({
    imageData
}: {
    imageData: ImgDataInterface
}) {
    return (
        <div className={styles["container-outer-image"]}>
            <Image
                src={imageData.imgSrc}
                alt={imageData.imgAlt}
                fill
                className={styles["container-inner-image"]}
                priority
            />
        </div>
    )
}