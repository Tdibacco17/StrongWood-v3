import Image from 'next/image'
import styles from "./PortraitImgComponent.module.scss"
import { ImgDataInterface, NavigateInterface } from '@/types'
import Link from 'next/link'

export default function PortraitImgComponent({
    imageData,
    navigateData
}: {
    imageData: ImgDataInterface,
    navigateData?: NavigateInterface[]
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
            <div className={styles["container-overlay-image"]}>
                <h1 className={styles["title-header"]}>StrongWood</h1>
            </div>
            {navigateData && navigateData.length > 0 &&
                <nav className={styles["container-titles"]}>
                    {
                        navigateData.map((item: NavigateInterface) => {
                            return <Link
                                aria-label={`Ir a proyecto ${item.title}`}
                                href={`${item.href}`}
                                key={item.href}
                                className={styles["title-item"]}>
                                {item.title}
                            </Link>
                        })
                    }
                </nav>}
        </div >
    )
}