import FooterComponent from "@/components/FooterComponent/FooterComponent"
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavbarComponent />
            {children}
            <FooterComponent />
        </>
    )
}