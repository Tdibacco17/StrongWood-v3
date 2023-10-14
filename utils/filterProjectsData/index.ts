import { ProjectDataInterface, SelectedFilterInterface } from "@/types";
import { projectsCategories } from "@/models/projects";
import { projectsData } from "@/models/projects";

export function filterProjectsData( slug: SelectedFilterInterface): ProjectDataInterface {
    const originProjectsData = { ...projectsData };

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