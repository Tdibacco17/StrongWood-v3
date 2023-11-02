import { ImgPlacheholderInterface } from "@/types/ProjectsTypes"
import styles from "./ImgPlaceholderComponent.module.scss"

export default function ImgPlaceholderComponent({
    sectionImg,
    isReverse,
    isTechnicalInfo
}: {
    sectionImg: ImgPlacheholderInterface,
    isReverse?: boolean,
    isTechnicalInfo?: boolean
}) {
    if (sectionImg === "twoSmall") {
        return (
            <div className={`${styles["container-placeholder"]} ${styles["container-twoSmall-placeholder"]} ${isReverse && styles["isReverse"]}`}>
                <div className={`${styles["first-column"]} ${isTechnicalInfo && styles["second-column"]}`}>
                    <small className="spinner">Cargando...</small>
                </div>
                <div className={styles["second-column"]}>
                    <small className="spinner">Cargando...</small>
                </div>
            </div>
        )
    }
    return (
        <div className={`${styles["container-placeholder"]} ${styles[sectionImg]}`}>
            <small className="spinner">Cargando...</small>
        </div>
    )
}