import SelectorTitleComponent from "@/components/SelectorTitleComponent/SelectorTitleComponent"
import styles from "./page.module.scss"
import FooterComponent from "@/components/FooterComponent/FooterComponent"
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent"

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavbarComponent />
            <section id="top" className={styles['container-section-projects']}>
                <SelectorTitleComponent />
                {children}
            </section>
            <FooterComponent />
        </>
    )
}