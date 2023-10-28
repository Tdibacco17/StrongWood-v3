import Image from 'next/image'
import styles from "./PortraitImgComponent.module.scss"
import { ProjectInterface } from '@/types/ProjectsTypes'
import { ImgDataInterface } from '@/types'
import NavbarComponent from '../NavbarComponent/NavbarComponent'

export default function PortraitImgComponent({
    imageData,
    projectData,
    isPrimaryNav
}: {
    imageData: ImgDataInterface,
    projectData: ProjectInterface | undefined,
    isPrimaryNav: boolean
}) {
    return (
        <div className={styles["container-section-portraitImg"]}>
            <div className={`${styles["container-outer-image"]}`}>
                <Image
                    src={imageData.imgSrc}
                    alt={imageData.imgAlt}
                    fill
                    className={styles["container-inner-image"]}
                    priority
                    style={{ objectPosition: imageData.objPosition }}
                    sizes="(max-width: 768px) 94vw, (max-width: 992px) 50vw, 100vw"
                />
            </div>
            <div className={styles["container-overlay-image"]} />
            {projectData &&
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
            {isPrimaryNav && <NavbarComponent navType='primary' />}
        </div>
    )
}