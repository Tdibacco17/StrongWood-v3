import { ContactItemDetaisInterface } from "@/types/ContactTypes"
import VerticalImgComponent from "../VerticalImgComponent/VerticalImgComponent"
import styles from "./ContactComponent.module.scss"
import data from "@/models/es.json"
import Link from "next/link"
import IconComponent from "../IconComponent/IconComponent"
import FormContainer from "@/containers/FormContainer/FormContainer"

export default function ContactComponent() {
    return (
        <section className={styles["container-section-contact"]}>
            <div className={styles["container-columns"]}>
                <VerticalImgComponent imageData={data.contactPage.image} />
                <div className={styles["contact-details"]}>
                    <p className={styles["header-title"]}>{data.contactPage.title}</p>
                    {
                        Object.values(data.contactPage.contactDetails).map((item: ContactItemDetaisInterface, index: number) => {
                            return (
                                <Link href={item.href} key={index} className={styles["link-item"]}>
                                    <p className={styles["title"]}>{item.title}</p>
                                    <div className={styles["wrapper-address"]}>
                                        {item.icon &&
                                            <IconComponent isAnchor={false} iconData={item.icon} />}
                                        <p className={styles["address"]}>{item.address}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            {/* <FormContainer /> */}
        </section>
    )
}