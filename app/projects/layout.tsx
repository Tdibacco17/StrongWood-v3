import { ProjectsProvider } from "@/context/ProjectsContextProvider"

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ProjectsProvider>
            {children}
        </ProjectsProvider>
    )
}