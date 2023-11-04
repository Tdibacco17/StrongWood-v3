import { useContext } from "react"
import styles from "./ProjectDetailComponent.module.scss"
import { ProductDetailContext } from "@/context/ProjectsContextProvider"
import TwoSmallImgComponent from "../TwoSmallImgComponent/TwoSmallImgComponent"
import Link from "next/link"
import PortraitImgComponent from "../PortraitImgComponent/PortraitImgComponent"
import RectangleImgComponent from "../RectangleImgComponent/RectangleImgComponent"
import { ProjectsDataContextInterface, SelectedFilterInterface } from "@/types/ProjectsTypes"
import TelonComponent from "../TelonComponent/TelonComponent"

export default function ProjectDetailComponent({
    projectSlug,
    telonActive,
    rectangleActive
}: {
    projectSlug: SelectedFilterInterface,
    telonActive: boolean,
    rectangleActive: boolean
}) {
    const { projectData } = useContext(
        ProductDetailContext
    ) as ProjectsDataContextInterface

    return (
        <div className={`${styles["container-section-detail"]} ${!telonActive && styles["scrollBlock"]}`}>
            {!rectangleActive && <TelonComponent />}
            {
                projectData &&
                <>
                    <TelonComponent telonActive={telonActive} rectangleActive={rectangleActive} />
                    {
                        projectData.details.portraitImg &&
                        <PortraitImgComponent
                            imageData={projectData.details.portraitImg}
                            projectData={projectData}
                            isPrimaryNav={false}
                            telonActive={telonActive}
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
                    {
                        projectData.details.secondRectangleImg &&
                        <RectangleImgComponent
                            imageData={projectData.details.secondRectangleImg}
                        />
                    }
                    {
                        projectData.details.thirdTwoSmallImg &&
                        <TwoSmallImgComponent
                            isReverse={true}
                            imagesData={projectData.details.thirdTwoSmallImg}
                        />
                    }
                    {
                        projectData.details.thirdRectangleImg &&
                        <RectangleImgComponent
                            imageData={projectData.details.thirdRectangleImg}
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