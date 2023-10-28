import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function BathroomsPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("bathroom");
    return <ProjectsComponent projectsData={parsedObject} />
}