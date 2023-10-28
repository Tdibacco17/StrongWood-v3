import { ProjectInterface } from "@/types/ProjectsTypes";
import styles from "./ProjectsCardComponent.module.scss"
import Image from "next/image";
import Link from "next/link";

export default function ProjectsCardComponent({ projectData }: { projectData: ProjectInterface }) {
    return (
        <Link
            // aria-label={`Ir a la página de proyecto ${projectData.title}`}
            href={`/${projectData.urlSlug}/${projectData.projectSlug}`}
            className={`${styles["container-project-card"]}`}>
            <div className={`${styles["container-outer-image"]}`}>
                <Image
                    src={projectData.image.imgSrc}
                    alt={projectData.image.imgAlt}
                    fill
                    className={`${styles["container-inner-image"]}`}
                    style={{ objectPosition: projectData.image.objPosition }}
                    sizes="(max-width: 992px) 50vw, (max-width: 768px) 94vw, 100vw"
                />
            </div>
            <div className={styles["container-description-card"]}>
                <p className={styles["title-description"]}>{projectData.title}</p>
                <p className={styles["subtitle-description"]}>{projectData.subtitle}</p>
            </div>
        </Link>
    )
}