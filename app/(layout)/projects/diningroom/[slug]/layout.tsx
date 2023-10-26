import { ProjectsProvider } from "@/context/ProjectsContextProvider"

export default function DiningRoomDetailLayout({
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