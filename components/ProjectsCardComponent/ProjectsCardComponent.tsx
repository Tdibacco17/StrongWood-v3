import styles from "./ProjectsCardComponent.module.scss"
import { ProjectInterface } from "@/types";
import Image from "next/image";

export default function ProjectsCardComponent({ projectData }: { projectData: ProjectInterface }) {
    return (
        <div className={styles["container-project-card"]}>
            <div className={`${styles["container-outer-image"]}`}>
                <Image
                    src={projectData.image.imgSrc}
                    alt={projectData.image.imgAlt}
                    fill
                    className={styles["container-inner-image"]}
                />
            </div>
            <div className={styles["container-description-card"]}>
                <p className={styles["title-description"]}>{projectData.title}</p>
                <p className={styles["subtitle-description"]}>{projectData.subtitle}</p>
            </div>
        </div>
    )
}