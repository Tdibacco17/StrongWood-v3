import { ProjectsProvider } from "@/context/ProjectsContextProvider"

export default function LocalDetailLayout({
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