import styles from "./SelectorTitleComponent.module.scss"
import data from "@/models/es.json"
import { ProjectSelectorInterface } from "@/types/ProjectsTypes";
import Link from "next/link";

export default function SelectorTitleComponent() {
    return (
        <div className={styles['container-section-selector-titles']}>
            <p className={styles['header-title']}>{data.projectsPage.title}</p>
            <nav className={styles['selector-titles']}>
                {
                    Object.values(data.projectsPage.projectsSelector).map((filterData: ProjectSelectorInterface) => {
                        return (
                            <Link
                                aria-label={`Ir a proyecto ${filterData.selectorTitle}`}
                                href={filterData.selectorFilter === "all" ? `/projects` : `/projects/${filterData.selectorFilter}`}
                                key={filterData.selectorFilter}
                                className={styles['title-item']}>
                                {filterData.selectorTitle}
                            </Link>
                        )
                    })
                }
            </nav>
        </div>
    )
}