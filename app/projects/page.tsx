import ProjectsContainer from "@/containers/ProjectsContainer/ProjectsContainer";
import styles from "./page.module.scss"

export default function ProjectsPage() {
    return (
        <section className={styles['container-section-projects']}>
            <ProjectsContainer />
        </section>
    )
}