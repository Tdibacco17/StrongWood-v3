import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function BedroomsPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("bedroom");
    return <ProjectsComponent projectsData={parsedObject} />
}