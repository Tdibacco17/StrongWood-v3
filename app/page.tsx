import FooterComponent from "@/components/FooterComponent/FooterComponent";
import styles from "./page.module.scss"
import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent"
import { projectsData } from "@/models/projects"
import TwoSmallImgComponent from "@/components/TwoSmallImgComponent/TwoSmallImgComponent";
import RectangleImgComponent from "@/components/RectangleImgComponent/RectangleImgComponent";

export default function HomePage() {
  const { homeData } = projectsData;
  return (
    <section className={styles["container-section-home"]}>
      <PortraitImgComponent
        imageData={homeData.image}
        projectData={undefined}
        isPrimaryNav={true} />
      {homeData.details.technicalInfo &&
        <TwoSmallImgComponent
          isReverse={true}
          technicalInfo={homeData.details.technicalInfo}
        />}
      {/* {homeData.details.rectangleImg &&
        <RectangleImgComponent imageData={homeData.details.rectangleImg} />} */}
      {homeData.details.secondTechnicalInfo &&
        <TwoSmallImgComponent
          isReverse={false}
          isColumnReverse={true}
          technicalInfo={homeData.details.secondTechnicalInfo} />}
      {homeData.details.secondTwoSmallImg &&
        <TwoSmallImgComponent
          isReverse={true}
          imagesData={homeData.details.secondTwoSmallImg} />}
      <FooterComponent />
    </section>
  )
}
