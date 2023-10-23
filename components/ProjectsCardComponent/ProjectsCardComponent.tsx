import styles from "./ProjectsCardComponent.module.scss"
import { ProjectInterface } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsCardComponent({ projectData }: { projectData: ProjectInterface }) {
    return (
        <Link aria-label={`Ir al proyecto ${projectData.title}`}
            href={`/projects/${projectData.urlSlug}/${projectData.projectSlug}`}
            className={`${styles["container-project-card"]}`}>
            <div className={`${styles["container-outer-image"]}`}>
                <Image
                    src={projectData.image.imgSrc}
                    alt={projectData.image.imgAlt}
                    fill
                    className={`${styles["container-inner-image"]} ${styles[`${projectData.image.position}`]}`}
                />
            </div>
            <div className={styles["container-description-card"]}>
                <p className={styles["title-description"]}>{projectData.title}</p>
                <p className={styles["subtitle-description"]}>{projectData.subtitle}</p>
            </div>
        </Link>
    )
}