import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent";
import data from "@/models/es.json"
import styles from "./page.module.scss"
export default function HomePage() {
  return (
    <section className={styles["container-section-home"]}>
      <PortraitImgComponent imageData={data.homePage.banner.image} navigateData={data.homePage.navigateData}/>
    </section>
  )
}
