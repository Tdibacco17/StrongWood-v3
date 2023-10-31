import { ImgPlacheholderInterface } from "@/types/ProjectsTypes"
import styles from "./ImgPlaceholderComponent.module.scss"

export default function ImgPlaceholderComponent({
    sectionImg,
    isReverse
}: {
    sectionImg: ImgPlacheholderInterface,
    isReverse?: boolean
}) {
    if (sectionImg === "twoSmall") {
        return (
            <div className={`${styles["container-placeholder"]} ${styles["container-twoSmall-placeholder"]} ${isReverse && styles["isReverse"]}`}>
                <div className={styles["first-column"]}>
                    <small className={styles["twoSmall-first"]}>Cargando...</small>
                </div>
                <div className={styles["second-column"]}>
                    <small className={styles["twoSmall-second"]}>Cargando...</small>
                </div>
            </div>
        )
    }
    return (
        <div className={`${styles["container-placeholder"]} ${styles[sectionImg]}`}>
            <small>Cargando...</small>
        </div>
    )
}