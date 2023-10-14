import { ProjectsProvider } from "@/context/ProjectsContextProvider"

export default function KitchenDetailLayout({
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