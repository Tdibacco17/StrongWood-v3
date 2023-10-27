import data from "@/models/es.json"
import styles from "./page.module.scss"
import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent"

export default function HomePage() {
  return (
    <section className={styles["container-section-home"]}>
      <PortraitImgComponent
        imageData={data.homePage.portrait.image}
        projectData={undefined} />
    </section>
  )
}
