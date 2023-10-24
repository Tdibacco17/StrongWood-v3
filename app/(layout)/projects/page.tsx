import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import SelectorTitleComponent from "@/components/SelectorTitleComponent/SelectorTitleComponent";
import { projectsData } from "@/models/projects";
import styles from "./page.module.scss"
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";

export default function ProjectPage() {
    return (
        <section className={styles['container-section-projects']}>
            <NavbarComponent />
            <SelectorTitleComponent />
            <ProjectsComponent projectsData={projectsData} />
        </section>
    )
}