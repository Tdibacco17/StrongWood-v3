import { useContext } from "react"
import styles from "./ProjectDetailComponent.module.scss"
import { ProductDetailContext } from "@/context/ProjectsContextProvider"
import { ProjectsDataContextInterface } from "@/types"
import LongImgComponent from "../LongImgComponent/LongImgComponent"
import TwoSmallImgComponent from "../TwoSmallImgComponent/TwoSmallImgComponent"
import ImgPlaceholderComponent from "../ImgPlaceholderComponent/ImgPlaceholderComponent"

export default function ProjectDetailComponent() {
    const { projectData } = useContext(
        ProductDetailContext
    ) as ProjectsDataContextInterface

    return (
        <div className={styles["container-section-detail"]}>
            {
                !projectData ?
                    <>
                        <ImgPlaceholderComponent sectionImg="long-first" />
                        <ImgPlaceholderComponent sectionImg="twoSmall" />
                        <ImgPlaceholderComponent sectionImg="long-reduce" />
                    </>
                    :
                    <>
                        {
                            projectData.details.firstLongImg &&
                            <LongImgComponent
                                imageData={projectData.details.firstLongImg}
                                projectTitle={projectData.title}
                                projectSubtitle={projectData.subtitle}
                                reduce={false}
                            />
                        }
                        {
                            projectData.details.twoSmallImg &&
                            <TwoSmallImgComponent
                                imagesData={projectData.details.twoSmallImg} />
                        }
                        {
                            projectData.details.reduceLongImg &&
                            <LongImgComponent
                                reduce={true}
                                imageData={projectData.details.reduceLongImg}
                            />
                        }
                    </>
            }
        </div>
    )
}