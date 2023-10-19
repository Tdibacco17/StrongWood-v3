import data from "@/models/es.json"
import styles from "./page.module.scss"
import BannerComponent from "@/components/BannerComponent/BannerComponent"
export default function HomePage() {
  return (
    <section className={styles["container-section-home"]}>
      <BannerComponent imageData={data.homePage.banner.image} navigateData={data.homePage.navigateData}/>
    </section>
  )
}
