import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectDataInterface } from "@/types/ProjectsTypes";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function LocalesPage() {
    const parsedObject: ProjectDataInterface = filterProjectsData("local");
    return <ProjectsComponent projectsData={parsedObject} projectSlug="local"/>
}