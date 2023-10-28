import FooterComponent from "@/components/FooterComponent/FooterComponent"
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent"
import { ProjectsProvider } from "@/context/ProjectsContextProvider"

export default function ProjectsDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavbarComponent navType="primary" />
            <ProjectsProvider>
                {children}
            </ProjectsProvider>
            <FooterComponent />
        </>
    )
}