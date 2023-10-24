import ProjectsCardComponent from "../ProjectsCardComponent/ProjectsCardComponent"
import SelectorTitleComponent from "../SelectorTitleComponent/SelectorTitleComponent";
import styles from "./ProjectsComponent.module.scss"
import { ProjectDataInterface, ProjectInterface } from "@/types";

export default function ProjectsComponent({ projectsData }: { projectsData: ProjectDataInterface }) {

    return (
        <section className={styles['container-section-projects']}>
            <SelectorTitleComponent />
            <div className={styles["container-projects-cards"]}>
                {
                    projectsData && Object.values(projectsData).map((projectData: ProjectInterface) => {
                        return <ProjectsCardComponent key={projectData.projectSlug} projectData={projectData} />
                    })
                }
            </div>
        </section>
    )
}