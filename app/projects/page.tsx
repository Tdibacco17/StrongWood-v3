import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function ProjectPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("all")
    return <ProjectsComponent projectsData={parsedObject} />
}