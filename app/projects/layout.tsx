import styles from "./page.module.scss"
import FooterComponent from "@/components/FooterComponent/FooterComponent"
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent"

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <>
            <NavbarComponent navType="secondary" />
            <section className={styles['container-section-projects']}>
                {children}
            </section>
            <FooterComponent />
        </>
    )
}