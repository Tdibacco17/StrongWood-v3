import FooterComponent from "@/components/FooterComponent/FooterComponent"

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <FooterComponent />
        </>
    )
}