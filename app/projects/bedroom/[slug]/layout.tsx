import { ProjectsProvider } from "@/context/ProjectsContextProvider"

export default function BedroomDetailLayout({
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