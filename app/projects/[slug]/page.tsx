import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { projectsData } from "@/models/projects";
import { ProjectDataInterface } from "@/types";
import { filterProjectsData } from "@/utils/filterProjectsData";

export default function ProjectsSlugPage({ params }: { params: { slug: string } }) {
    const originProjectsData = { ...projectsData };
    const parsedObject: ProjectDataInterface = filterProjectsData(originProjectsData, params.slug);

    return <ProjectsComponent projectsData={parsedObject} />
}