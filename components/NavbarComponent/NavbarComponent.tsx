import Link from "next/link"
import IconComponent from "../IconComponent/IconComponent"
import styles from "./NavbarComponent.module.scss"
import data from "@/models/es.json"

export default function NavbarComponent() {
    return (
        <section className={styles["container-section-navbar"]}>
            <div className={styles["wrapper-navbar"]}>
                <div className={styles["fill-space"]} />
                <Link
                    // aria-label={`Ir a la página de inicio`}
                    href={"/"} className={styles["navbar-title"]}>
                    {data.navbar.title}
                </Link>
                <IconComponent iconData={data.navbar.burgermenu} isAnchor={false} />
            </div>
        </section>
    )
}