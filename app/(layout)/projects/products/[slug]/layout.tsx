import { ProjectsProvider } from "@/context/ProjectsContextProvider"

export default function ProductDetailLayout({
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