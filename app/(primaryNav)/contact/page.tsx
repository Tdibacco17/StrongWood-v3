import styles from "./page.module.scss"
import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent";
import data from "@/models/es.json"
import ContactDetailsComponent from "@/components/ContactDetailsComponent/ContactDetailsComponent";

export default function ContactPage() {
    return (
        <section className={styles["container-section-contact"]}>
            <PortraitImgComponent
                imageData={data.contactPage.image}
                projectData={undefined}
            />
            <ContactDetailsComponent />
        </section>
    )
}