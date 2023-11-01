import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function DiningRoomsPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("diningroom");
    return <ProjectsComponent projectsData={parsedObject} projectSlug="diningroom"/>
}