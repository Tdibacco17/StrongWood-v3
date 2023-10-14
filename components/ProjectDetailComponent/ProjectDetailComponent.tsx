import { useContext } from "react"
import styles from "./ProjectDetailComponent.module.scss"
import { ProductDetailContext } from "@/context/ProjectsContextProvider"
import { ProjectsDataContextInterface } from "@/types"

export default function ProjectDetailComponent() {
    const { projectData } = useContext(
        ProductDetailContext
    ) as ProjectsDataContextInterface

    return (
        <div>
            {projectData && projectData.title}
        </div>
    )
}