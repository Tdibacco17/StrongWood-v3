import { ProjectDataInterface, SelectedFilterInterface } from "@/types";
import { projectsCategories } from "@/models/projects";

export function filterProjectsData(originProjectsData: ProjectDataInterface, slug: string): ProjectDataInterface {
    const selectedFilter: SelectedFilterInterface = slug && projectsCategories.includes(slug)
        ? slug as SelectedFilterInterface
        : "all";

    const parsedObject: ProjectDataInterface = Object.keys(originProjectsData).reduce((filteredData, projectKey) => {
        const project = originProjectsData[projectKey];
        if (project.categories.includes(selectedFilter)) {
            filteredData[projectKey] = project;
        }
        return filteredData;
    }, {} as ProjectDataInterface);

    return parsedObject;
}
