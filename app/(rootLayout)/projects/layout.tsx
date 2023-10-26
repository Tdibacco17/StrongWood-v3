import SelectorTitleComponent from "@/components/SelectorTitleComponent/SelectorTitleComponent"
import styles from "./page.module.scss"

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <section className={styles['container-section-projects']}>
            <SelectorTitleComponent />
            {children}
        </section>
    )
}