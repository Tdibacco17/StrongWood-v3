import Image from 'next/image'
import styles from "./PortraitImgComponent.module.scss"
import { ImgDataInterface, ProjectInterface } from '@/types'
import Link from 'next/link'

export default function PortraitImgComponent({
    imageData,
    reduce,
    projectData
}: {
    imageData: ImgDataInterface,
    reduce: boolean
    projectData: ProjectInterface | undefined
}) {
    return (
        <div className={styles["container-section-portraitImg"]}>
            <div className={`${styles["container-outer-image"]} ${reduce && styles["reduce"]}`}>
                <Image
                    src={imageData.imgSrc}
                    alt={imageData.imgAlt}
                    fill
                    className={styles["container-inner-image"]}
                    priority
                    style={{ objectPosition: imageData.objPosition }}
                    sizes={!reduce ? "(max-width: 768px) 90vw, (max-width: 992px) 50vw, 100vw"
                        : "(max-width: 992px) 700px, (max-width: 768px) 90vw, 100vw"}
                />
            </div>
            {!reduce && <div className={styles["container-overlay-image"]} />}
            {projectData && !reduce &&
                <div className={`${styles["container-overlay-titles"]}`}>
                    <div className={styles["wrapper-overlay"]}>
                        <div className={styles["container-titles"]}>
                            <p className={styles["title-title"]}>{projectData?.title}</p>
                            <div className={styles["wrapper-column"]}>
                                <p>{projectData?.year}</p>
                                <p>{projectData?.location}</p>
                            </div>
                            <p className={styles["title-mobile"]}>{projectData?.year} {projectData?.location}</p>
                        </div>
                    </div>
                </div>}
            {!reduce && <Link href={"/"} className={styles["title-header"]}>StrongWood</Link>}
        </div>
    )
}