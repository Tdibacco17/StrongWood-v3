import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { projectsData } from "@/models/projects";

export default function ProjectPage() {
    return <ProjectsComponent projectsData={projectsData} />
}