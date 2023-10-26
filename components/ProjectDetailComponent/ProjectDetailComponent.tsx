import { useContext } from "react"
import styles from "./ProjectDetailComponent.module.scss"
import { ProductDetailContext } from "@/context/ProjectsContextProvider"
import { ProjectsDataContextInterface, SelectedFilterInterface } from "@/types"
import LongImgComponent from "../LongImgComponent/LongImgComponent"
import TwoSmallImgComponent from "../TwoSmallImgComponent/TwoSmallImgComponent"
import ImgPlaceholderComponent from "../ImgPlaceholderComponent/ImgPlaceholderComponent"
import Link from "next/link"

export default function ProjectDetailComponent({ projectSlug }: { projectSlug: SelectedFilterInterface }) {
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
            <div className={styles["container-title-back"]}>
                <Link
                    href={`/projects/${projectSlug}`}
                    aria-label="Ir atras"
                    className={styles["title-back"]}>Ir atras</Link>
            </div>
        </div>
    )
}