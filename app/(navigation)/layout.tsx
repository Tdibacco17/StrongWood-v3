import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";

export default function NavigationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavbarComponent />
            {children}
        </>
    )
}