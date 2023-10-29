import styles from "./FooterComponent.module.scss"
import data from "@/models/es.json"
import { EmailIconComponent, InstagramIconComponent, WhatsappIconComponent } from "../IconComponent/IconComponent"
import BtnTopComponent from "./BtnScrollComponent/BtnScrollComponent"

export default function FooterComponent() {
    return (
        <section className={styles["container-section-footer"]}>
            <div className={styles["wrapper-footer"]}>
                <div className={styles["primary-footer"]}>
                    <div className={styles["container-networks-icon"]}>
                        <InstagramIconComponent fill="#4F4F4F" size="small" hover={true} link="https://www.instagram.com/strongwood_ar" />
                        <WhatsappIconComponent fill="#4F4F4F" size="small" hover={true} link="https://web.whatsapp.com/send?phone=5491171196506" />
                        <EmailIconComponent fill="#4F4F4F" size="small" hover={true} link="mailto:strongwoodventas@gmail.com" />
                    </div>
                    <BtnTopComponent title={data.footer.scrollTo} />
                </div>
                <div className={styles["secondary-footer"]}>
                    <small className={styles["text-company"]}>{data.footer.company}</small>
                </div>
            </div>
        </section>
    )
}