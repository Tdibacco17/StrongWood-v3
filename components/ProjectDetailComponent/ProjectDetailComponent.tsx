import { useContext } from "react"
import styles from "./ProjectDetailComponent.module.scss"
import { ProductDetailContext } from "@/context/ProjectsContextProvider"
import TwoSmallImgComponent from "../TwoSmallImgComponent/TwoSmallImgComponent"
import ImgPlaceholderComponent from "../ImgPlaceholderComponent/ImgPlaceholderComponent"
import Link from "next/link"
import PortraitImgComponent from "../PortraitImgComponent/PortraitImgComponent"
import RectangleImgComponent from "../RectangleImgComponent/RectangleImgComponent"
import { ProjectsDataContextInterface, SelectedFilterInterface } from "@/types/ProjectsTypes"

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
                        <ImgPlaceholderComponent sectionImg="twoSmall" isReverse={true} isTechnicalInfo={true} />
                        <ImgPlaceholderComponent sectionImg="rectangle" />
                        <ImgPlaceholderComponent sectionImg="twoSmall" />
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
                            projectData.details.technicalInfo &&
                            <TwoSmallImgComponent
                                isReverse={true}
                                technicalInfo={projectData.details.technicalInfo}
                            />
                        }
                        {
                            projectData.details.rectangleImg &&
                            <RectangleImgComponent
                                imageData={projectData.details.rectangleImg}
                            />
                        }
                        {
                            projectData.details.twoSmallImg &&
                            <TwoSmallImgComponent
                                isReverse={false}
                                imagesData={projectData.details.twoSmallImg}
                            />
                        }
                    </>
            }
            <div className={styles["container-title-back"]}>
                <Link
                    href={`/projects/${projectSlug}`}
                    className={styles["title-back"]}>Volver atras</Link>
            </div>
        </div>
    )
}