import { useContext } from "react"
import styles from "./ProjectDetailComponent.module.scss"
import { ProductDetailContext } from "@/context/ProjectsContextProvider"
import { ProjectsDataContextInterface } from "@/types"
import PortraitImgComponent from "../PortraitImgComponent/PortraitImgComponent"
import TwoSmallImgComponent from "../TwoSmallImgComponent/TwoSmallImgComponent"
import ImgPlaceholderComponent from "../ImgPlaceholderComponent/ImgPlaceholderComponent"

export default function ProjectDetailComponent() {
    const { projectData } = useContext(
        ProductDetailContext
    ) as ProjectsDataContextInterface

    return (
        <div className={styles["container-section-detail"]}>
            {
                projectData && projectData.details.firstPortraitImg ?
                    <PortraitImgComponent
                        imageData={projectData.details.firstPortraitImg}
                        projectTitle={projectData.title}
                        projectSubtitle={projectData.subtitle}
                        reduce={false}
                    />
                    : <ImgPlaceholderComponent sectionImg="firstPortrait" />
            }
            {projectData && projectData.details.twoSmallImg ?
                <TwoSmallImgComponent
                    imagesData={projectData.details.twoSmallImg} />
                : <ImgPlaceholderComponent sectionImg="twoSmall" />
            }
            {
                projectData && projectData.details.secondPortraitImg ?
                    <PortraitImgComponent
                        reduce={true}
                        imageData={projectData.details.secondPortraitImg}
                    />
                    : <ImgPlaceholderComponent sectionImg="secondPortrait" />
            }
        </div>
    )
}