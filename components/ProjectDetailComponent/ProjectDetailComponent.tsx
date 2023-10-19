import { useContext } from "react"
import styles from "./ProjectDetailComponent.module.scss"
import { ProductDetailContext } from "@/context/ProjectsContextProvider"
import { ProjectsDataContextInterface } from "@/types"
import PortraitImageComponent from "../PortraitImageComponent/PortraitImageComponent"
import TwoImagesComponent from "../TwoImagesComponent/TwoImagesComponent"

export default function ProjectDetailComponent() {
    const { projectData } = useContext(
        ProductDetailContext
    ) as ProjectsDataContextInterface

    return (
        <div className={styles["container-section-detail"]}>
            {projectData && <>
                <PortraitImageComponent
                    imageData={projectData.details.firstPortraitImg}
                    projectTitle={projectData.title}
                    projectSubtitle={projectData.subtitle}
                />
                {
                    projectData.details?.twoImages &&
                    <TwoImagesComponent imagesData={projectData?.details?.twoImages} />
                }
            </>
            }
        </div>
    )
}