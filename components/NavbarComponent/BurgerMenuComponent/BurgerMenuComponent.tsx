'use client'
import { useState } from "react"
import styles from "./BurgerMenuComponent.module.scss"
import { BurgerMenuIconComponent, CloseIconComponent } from "@/components/IconComponent/IconComponent"
import data from "@/models/es.json"
import Link from "next/link"

export function BurgerMenuComponent({ isPrimary }: { isPrimary: boolean }) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {
                !isOpen ?
                    (
                        isPrimary ?
                            <BurgerMenuIconComponent isButton={handleIsOpen} fill="#4F4F4F" size="medium" hover={true} />
                            : <BurgerMenuIconComponent isButton={handleIsOpen} fill="white" size="medium" hover={false} />
                    ) : (
                        isPrimary ? <CloseIconComponent isButton={handleIsOpen} fill="#4F4F4F" size="medium" hover={true} />
                            : <CloseIconComponent isButton={handleIsOpen} fill="white" size="medium" hover={false} />
                    )
            }
            {isOpen &&
                <div className={`${styles["container-section-burger-menu"]} ${isPrimary && styles["secondary"]}`}>
                    <nav className={`${styles["container-navigation"]} ${isPrimary && styles["secondary"]}`}>
                        {data.navbar.navigation.map((item: { title: string, url: string }, index: number) => {
                            return <Link href={item.url} key={index} className={`${styles["title-nav"]} ${isPrimary && styles["secondary"]}`}>{item.title}</Link>
                        })}
                    </nav>
                </div>}
        </>
    )
}