import { useContext } from "react";
import ProjectsCardComponent from "../ProjectsCardComponent/ProjectsCardComponent"
import SelectorTitleComponent from "../SelectorTitleComponent/SelectorTitleComponent"
import styles from "./ProjectsComponent.module.scss"
import { ProjectsContext } from "@/context/ProjectsContextProvider";
import { ProjectInterface, ProjectsDataContextInterface } from "@/types";

export default function ProjectsComponent() {
    const { projectsData } = useContext(ProjectsContext) as ProjectsDataContextInterface;

    return (
        <>
            <SelectorTitleComponent />
            <div className={styles["container-projects-cards"]}>
                {
                    projectsData && Object.values(projectsData).map((projectData: ProjectInterface) => {
                        return <ProjectsCardComponent key={projectData.projectSlug} projectData={projectData} />
                    })
                }
            </div>
        </>
    )
}