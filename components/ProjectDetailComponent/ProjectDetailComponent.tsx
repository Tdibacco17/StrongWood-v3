import { useContext } from "react"
import styles from "./ProjectDetailComponent.module.scss"
import { ProductDetailContext } from "@/context/ProjectsContextProvider"
import TwoSmallImgComponent from "../TwoSmallImgComponent/TwoSmallImgComponent"
import ImgPlaceholderComponent from "../ImgPlaceholderComponent/ImgPlaceholderComponent"
import Link from "next/link"
import PortraitImgComponent from "../PortraitImgComponent/PortraitImgComponent"
import RectangleImgComponent from "../RectangleImgComponent/RectangleImgComponent"
import { ProjectsDataContextInterface, SelectedFilterInterface } from "@/types/ProjectsTypes"
import TechnicalInfoComponent from "../TechnicalInfoComponent/TechnicalInfoComponent"

export default function ProjectDetailComponent({ projectSlug }: { projectSlug: SelectedFilterInterface }) {
    const { projectData } = useContext(
        ProductDetailContext
    ) as ProjectsDataContextInterface

    return (
        <div className={styles["container-section-detail"]}>
            {
                !projectData ?
                    <>
                        <ImgPlaceholderComponent sectionImg="portrait" />
                        <ImgPlaceholderComponent sectionImg="twoSmall" isReverse={true}/>
                        <ImgPlaceholderComponent sectionImg="twoSmall" />
                        <ImgPlaceholderComponent sectionImg="rectangle" />
                    </>
                    :
                    <>
                        {
                            projectData.details.portraitImg &&
                            <PortraitImgComponent
                                imageData={projectData.details.portraitImg}
                                projectData={projectData}
                                isPrimaryNav={false}
                            />
                        }
                        {
                            projectData.details.twoSmallImg && projectData.details.technicalInfo &&
                            <TwoSmallImgComponent
                                isReverse={true}
                                imagesData={projectData.details.twoSmallImg}
                                technicalInfo={projectData.details.technicalInfo}
                            />
                        }
                        {
                            projectData.details.twoSmallImg && 
                            <TwoSmallImgComponent
                                isReverse={false}
                                imagesData={projectData.details.twoSmallImg}
                            />
                        }
                        {
                            projectData.details.rectangleImg &&
                            <RectangleImgComponent
                                imageData={projectData.details.rectangleImg}
                            />
                        }
                    </>
            }
            <div className={styles["container-title-back"]}>
                <Link
                    href={`/projects/${projectSlug}`}
                    aria-label="Ir atras"
                    className={styles["title-back"]}>Ir atras</Link>
            </div>
        </div>
    )
}