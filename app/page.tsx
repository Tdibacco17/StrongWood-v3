import FooterComponent from "@/components/FooterComponent/FooterComponent";
import styles from "./page.module.scss"
import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent"
import { projectsData } from "@/models/projects"
import TwoSmallImgComponent from "@/components/TwoSmallImgComponent/TwoSmallImgComponent";

export default function HomePage() {
  const { homeData } = projectsData;
  return (
    <section className={styles["container-section-home"]}>
      <PortraitImgComponent
        imageData={homeData.image}
        projectData={undefined}
        isPrimaryNav={true} />
      {homeData.details.twoSmallImg && <TwoSmallImgComponent isReverse={false} imagesData={homeData.details.twoSmallImg} />}
      {homeData.details.secondTwoSmallImg && <TwoSmallImgComponent isReverse={true} imagesData={homeData.details.secondTwoSmallImg} />}
      <FooterComponent />
    </section>
  )
}
