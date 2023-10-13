import { useContext } from "react";
import styles from "./SelectorTitleComponent.module.scss"
import data from "@/models/es.json"
import { ProjectsContext } from "@/context/ProjectsContextProvider";
import { ProjectSelectorInterface, ProjectsDataContextInterface, SelectedFilterInterface } from "@/types";

export default function SelectorTitleComponent() {
    const { handleFilteredProjects } = useContext(ProjectsContext) as ProjectsDataContextInterface;
    return (
        <div className={styles['container-section-selector-titles']}>
            <p className={styles['header-title']}>{data.projectsPage.title}</p>
            <ul className={styles['selector-titles']}>
                {
                    Object.values(data.projectsPage.projectsSelector).map((filterData: ProjectSelectorInterface) => {
                        return (
                            <li key={filterData.selectorFilter}
                                className={styles['title-item']}
                                onClick={() => handleFilteredProjects(filterData.selectorFilter as SelectedFilterInterface)}>
                                {filterData.selectorTitle}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}