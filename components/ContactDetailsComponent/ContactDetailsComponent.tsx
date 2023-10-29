import { ContactItemDetaisInterface } from "@/types/ContactTypes"
import styles from "./ContactDetailsComponent.module.scss"
import data from "@/models/es.json"
import Link from "next/link"
import  { InstagramIconComponent } from "../IconComponent/IconComponent"

export default function ContactDetailsComponent() {
    return (
        <section className={styles["container-contact-details"]}>
            <div className={styles["wrapper-contact-details"]}>
                <p className={styles["header-title"]}>{data.contactPage.title}</p>
                {
                    Object.values(data.contactPage.contactDetails).map((item: ContactItemDetaisInterface, index: number) => {
                        return (
                            <Link href={item.href} key={index} className={styles["link-item"]}>
                                <p className={styles["title"]}>{item.title}</p>
                                <div className={styles["wrapper-address"]}>
                                    {item.icon && <InstagramIconComponent fill="white" size="small" hover={false}/>}
                                    <p className={styles["address"]}>{item.address}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}