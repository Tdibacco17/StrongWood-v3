import Link from "next/link"
import styles from "./NavbarComponent.module.scss"
import data from "@/models/es.json"
import { NavInterface } from "@/types"
import { BurgerMenuComponent } from "./BurgerMenuComponent/BurgerMenuComponent"

export default function NavbarComponent({ navType }: { navType: NavInterface }) {
    return (
        <section className={`${styles["container-section-navbar"]} ${styles[`${navType}`]}`}>
            <div className={`${styles["wrapper-navbar"]} ${styles[`${navType}`]}`}>
                {navType === "secondary" && <div className={styles["fill-space"]} />}
                <Link href={"/"} className={`${styles["navbar-title"]} ${styles[`${navType}`]}`}>
                    {data.navbar.title}
                </Link>
                <BurgerMenuComponent isPrimary={navType === "secondary" ? true : false} />
            </div>
        </section>
    )
}