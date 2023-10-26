import { useContext } from "react"
import styles from "./ProjectDetailComponent.module.scss"
import { ProductDetailContext } from "@/context/ProjectsContextProvider"
import { ProjectsDataContextInterface, SelectedFilterInterface } from "@/types"
import TwoSmallImgComponent from "../TwoSmallImgComponent/TwoSmallImgComponent"
import ImgPlaceholderComponent from "../ImgPlaceholderComponent/ImgPlaceholderComponent"
import Link from "next/link"
import PortraitImgComponent from "../PortraitImgComponent/PortraitImgComponent"

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
                        <ImgPlaceholderComponent sectionImg="twoSmall" />
                        <ImgPlaceholderComponent sectionImg="portrait-reduce" />
                    </>
                    :
                    <>
                        {
                            projectData.details.firstLongImg &&
                            <PortraitImgComponent
                                imageData={projectData.details.firstLongImg}
                                reduce={false}
                                projectData={projectData}
                            /> 
                        }
                        {
                            projectData.details.twoSmallImg &&
                            <TwoSmallImgComponent
                                imagesData={projectData.details.twoSmallImg} />
                        }
                        {
                            projectData.details.reduceLongImg &&
                            <PortraitImgComponent
                                reduce={true}
                                imageData={projectData.details.reduceLongImg}
                                projectData={projectData}
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