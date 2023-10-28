import FooterComponent from "@/components/FooterComponent/FooterComponent";
import styles from "./page.module.scss"
import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent"
import { projectsData } from "@/models/projects"

export default function HomePage() {
  const { homeData } = projectsData;
  return (
    <section className={styles["container-section-home"]}>
      <PortraitImgComponent
        imageData={homeData.image}
        projectData={undefined}
        isPrimaryNav={true} />
      <FooterComponent />
    </section>
  )
}
