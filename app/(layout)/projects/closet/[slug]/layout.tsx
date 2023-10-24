import { ProjectsProvider } from "@/context/ProjectsContextProvider"

export default function ClosetDetailLayout({
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