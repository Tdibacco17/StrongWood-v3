import styles from "./ContactDetailsComponent.module.scss"
import data from "@/models/es.json"
import Link from "next/link"
import { InstagramIconComponent } from "../IconComponent/IconComponent"

export default function ContactDetailsComponent() {
    return (
        <section className={styles["container-contact-details"]}>
            <div className={styles["wrapper-contact-details"]}>
                <p className={styles["header-title"]}>{data.contactPage.title}</p>
                <Link rel="noopener noreferrer" target="_blank"
                    href={data.contactPage.contactDetails.email.href}
                    className={`${styles["link-item"]}`}>
                    <p className={styles["title"]}>{data.contactPage.contactDetails.email.title}</p>
                    <div className={styles["wrapper-address"]}>
                        <p className={styles["address"]}>{data.contactPage.contactDetails.email.address}</p>
                    </div>
                </Link>
                <Link rel="noopener noreferrer" target="_blank"
                    href={data.contactPage.contactDetails.whatsappDesktop.href}
                    className={`${styles["link-item"]} ${styles["isDesktop"]}`}>
                    <p className={styles["title"]}>{data.contactPage.contactDetails.whatsappDesktop.title}</p>
                    <div className={styles["wrapper-address"]}>
                        <p className={styles["address"]}>{data.contactPage.contactDetails.whatsappDesktop.address}</p>
                    </div>
                </Link>
                <Link rel="noopener noreferrer" target="_blank"
                    href={data.contactPage.contactDetails.whatsappMobile.href}
                    className={`${styles["link-item"]} ${styles["isMobile"]}`}>
                    <p className={styles["title"]}>{data.contactPage.contactDetails.whatsappMobile.title}</p>
                    <div className={styles["wrapper-address"]}>
                        <p className={styles["address"]}>{data.contactPage.contactDetails.whatsappMobile.address}</p>
                    </div>
                </Link>
                <Link rel="noopener noreferrer" target="_blank"
                    href={data.contactPage.contactDetails.instagram.href}
                    className={`${styles["link-item"]}`}>
                    <p className={styles["title"]}>{data.contactPage.contactDetails.instagram.title}</p>
                    <div className={styles["wrapper-address"]}>
                        <InstagramIconComponent fill="white" size="small" hover={false} />
                        <p className={styles["address"]}>{data.contactPage.contactDetails.instagram.address}</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}