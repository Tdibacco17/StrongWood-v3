import Link from "next/link"
import styles from "./NavbarComponent.module.scss"
import data from "@/models/es.json"
import { NavInterface } from "@/types"
import { BurgerMenuComponent } from "./BurgerMenuComponent/BurgerMenuComponent"
import { BurgerMenuIconComponent, CloseIconComponent } from "../IconComponent/IconComponent"

export default function NavbarComponent({
    navType,
    isAtTop,
    isOpen,
    handleIsOpen
}: {
    navType: NavInterface,
    isAtTop: boolean,
    isOpen: boolean
    handleIsOpen: () => void
}) {
    return (
        <section className={`
        ${navType === "primary" && isAtTop ? styles['hidden'] : styles['show-on-top']}
        ${!isAtTop && styles['shadow']}
        ${styles["container-section-navbar"]} 
        ${navType === "secondary" && styles[`${navType}`]}
        ${isOpen && styles['isOpen']}
        `}>
            <div className={`${styles["wrapper-navbar"]} ${styles[`${navType}`]}`}>
                {navType === "secondary" && <div className={styles["fill-space"]} />}

                <Link 
                onClick={handleIsOpen}
                href={"/"} className={`
                ${styles["navbar-title"]} 
                ${styles[`${navType}`]}
                ${!isAtTop && styles['change-color']}
                `}>
                    {data.navbar.title}
                </Link>
                {!isOpen ? (
                    navType === "secondary" ?
                        <BurgerMenuIconComponent isButton={handleIsOpen} fill={"#4F4F4F"}
                            size="medium" hover={true} />
                        : <BurgerMenuIconComponent isButton={handleIsOpen} fill={!isAtTop ? "#4F4F4F" : "white"}
                            size="medium" hover={false} />
                ) : (
                    navType === "secondary" ?
                        <CloseIconComponent isButton={handleIsOpen} fill={"#4F4F4F"}
                            size="medium" hover={true} />
                        : <CloseIconComponent isButton={handleIsOpen} fill={!isAtTop ? "#4F4F4F" : "white"}
                            size="medium" hover={false} />
                )}
            </div>
            <BurgerMenuComponent
                isSecondary={navType === "secondary" ? true : false}
                isOpen={isOpen}
                isAtTop={isAtTop}
                handleIsOpen={handleIsOpen}
            />
        </section>
    )
}