import { ProjectDataInterface, ProjectInterface, SelectedFilterInterface } from "@/types/ProjectsTypes";
import ProjectsCardComponent from "../ProjectsCardComponent/ProjectsCardComponent"
import styles from "./ProjectsComponent.module.scss"
import SelectorTitleComponent from "../SelectorTitleComponent/SelectorTitleComponent";
import BtnTopComponent from "../FooterComponent/BtnScrollComponent/BtnScrollComponent";

export default function ProjectsComponent({
    projectsData,
    projectSlug
}: {
    projectsData: ProjectDataInterface,
    projectSlug: SelectedFilterInterface
}) {

    return (
        <>
            <SelectorTitleComponent projectSlug={projectSlug} />
            <div className={styles["container-projects-cards"]}>
                {
                    projectsData && Object.values(projectsData).map((projectData: ProjectInterface, index: number) => {
                        return <ProjectsCardComponent
                            key={projectData.projectSlug}
                            projectData={projectData}
                            index={index}
                        />
                    })
                }
            </div>
            <div className={styles["container-btn-top"]}>
                <BtnTopComponent title={"Ir arriba"} />
            </div>
        </>
    )
}