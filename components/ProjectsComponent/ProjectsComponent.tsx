import { ProjectDataInterface, ProjectInterface } from "@/types/ProjectsTypes";
import ProjectsCardComponent from "../ProjectsCardComponent/ProjectsCardComponent"
import styles from "./ProjectsComponent.module.scss"

export default function ProjectsComponent({ projectsData }: { projectsData: ProjectDataInterface }) {

    return (
        <div className={styles["container-projects-cards"]}>
            {
                projectsData && Object.values(projectsData).map((projectData: ProjectInterface) => {
                    return <ProjectsCardComponent
                        key={projectData.projectSlug}
                        projectData={projectData}
                    />
                })
            }
        </div>
    )
}