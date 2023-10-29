import Link from "next/link"
import { BurgerMenuIconComponent } from "../IconComponent/IconComponent"
import styles from "./NavbarComponent.module.scss"
import data from "@/models/es.json"

type NavInterface = "primary" | "secondary"

export default function NavbarComponent({ navType }: { navType: NavInterface }) {
    return (
        <section className={`${styles["container-section-navbar"]} ${styles[`${navType}`]}`}>
            <div className={`${styles["wrapper-navbar"]} ${styles[`${navType}`]}`}>
                {navType === "secondary" && <div className={styles["fill-space"]} />}
                <Link href={"/"} className={`${styles["navbar-title"]} ${styles[`${navType}`]}`}>
                    {data.navbar.title}
                </Link>
                {navType === "secondary" ?
                    <BurgerMenuIconComponent fill="#4F4F4F" size="medium" hover={true} />
                    : <BurgerMenuIconComponent fill="white" size="medium" hover={false} />}
            </div>
        </section>
    )
}