import { ProjectsProvider } from "@/context/ProjectsContextProvider"

export default function BathroomDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ProjectsProvider>
                {children}
            </ProjectsProvider>
        </>
    )
}