import styles from "./ProjectsCardComponent.module.scss"
import { ProjectsContext } from "@/context/ProjectsContextProvider";
import { ProjectInterface, ProjectsDataContextInterface } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function ProjectsCardComponent({ projectData }: { projectData: ProjectInterface }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
        <div className={styles["container-project-card"]}>
            <div className={`${styles["container-outer-image"]}`}>
                <Image
                    src={projectData.image.imgSrc}
                    alt={projectData.image.imgAlt}
                    fill
                    className={styles["container-inner-image"]}
                    style={{ opacity: imageLoaded ? 1 : 0 }}
                    onLoadingComplete={() => { setImageLoaded(true) }}
                />
            </div>
            <div className={styles["container-description-card"]}>
                <p className={styles["title-description"]}>{projectData.title}</p>
                <p className={styles["subtitle-description"]}>{projectData.subtitle}</p>
            </div>
        </div>
    )
}