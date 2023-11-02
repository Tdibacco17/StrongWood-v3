import Image from 'next/image'
import styles from "./RectangleImgComponent.module.scss"
import { ImgDataInterface } from '@/types'

export default function RectangleImgComponent({
    imageData,
}: {
    imageData: ImgDataInterface,
}) {
    return (
        <div className={`${styles["container-outer-image"]}`}>
            <Image
                src={imageData.imgSrc}
                alt={imageData.imgAlt}
                fill
                className={styles["container-inner-image"]}
                priority
                style={{ objectPosition: imageData.objPosition }}
                sizes="(max-width: 768px) 94vw, 100vw"
            />
        </div>
    )
}