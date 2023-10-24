import { ImgPlacheholderInterface } from "@/types"
import styles from "./ImgPlaceholderComponent.module.scss"

export default function ImgPlaceholderComponent({
    sectionImg
}: {
    sectionImg: ImgPlacheholderInterface
}) {
    if (sectionImg === "twoSmall") {
        return (
            <div className={`${styles["container-placeholder"]} ${styles["container-twoSmall-placeholder"]}`}>
                <div className={styles["first-column"]}>
                    <small className={styles["firstTwoSmall"]}>Cargando...</small>
                </div>
                <div className={styles["second-column"]}>
                    <small className={styles["secondTwoSmall"]}>Cargando...</small>
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