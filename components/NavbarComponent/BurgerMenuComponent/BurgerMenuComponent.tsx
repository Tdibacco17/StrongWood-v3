import styles from "./BurgerMenuComponent.module.scss"
import data from "@/models/es.json"
import Link from "next/link"

export function BurgerMenuComponent({
    isSecondary,
    isOpen,
    isAtTop
}: {
    isSecondary: boolean,
    isOpen: boolean,
    isAtTop: boolean
}) {
    return (
        <>
            <div className={`
            ${styles["container-section-burger-menu"]} ${isOpen && styles["isOpen"]} ${isOpen && !isAtTop && styles['expand']}
            `}>
                <nav className={`
                ${styles["container-navigation"]}
                ${isOpen && styles["isOpen"]}
                ${isSecondary && styles["secondary"]} 
                `}>
                    {data.navbar.navigation.map((item: { title: string, url: string }, index: number) => {
                        return <Link href={item.url} key={index}
                            className={`
                            ${styles["title-nav"]} 
                            ${isSecondary && styles["secondary"]} 
                            ${isOpen && !isAtTop && styles['change-color']}
                        `}>
                            {item.title}
                        </Link>
                    })}
                </nav>
            </div>
        </>
    )
}