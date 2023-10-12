'use client'
import { ProjectDataInterface, ProjectsDataContextInterface, SelectedFilterInterface } from "@/types";
import { ReactNode, createContext, useState } from "react";

export const ProjectsContext = createContext<ProjectsDataContextInterface | {}>({});

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
    const [projectsData, setProjectsData] = useState<ProjectDataInterface>({});
    const [currentFilter, setCurrentFilter] = useState<SelectedFilterInterface>("all");

    const handleProjectDataChange = (projectData: ProjectDataInterface) => {
        setProjectsData(projectData);
    };

    const handleFilteredProjects = (filter: SelectedFilterInterface) => {
        const parsedObject: ProjectDataInterface = {};
        console.log("[FILTERING]", Object.keys(projectsData));

        const filteredKeys = Object.keys(projectsData).filter(
            (projectKey: string) => {
                return projectsData[projectKey].categories.includes(filter);
            }
        );
        console.log("[FILTERING]", filteredKeys);

        filteredKeys.forEach((filteredKey: string) => {
            parsedObject[filteredKey] = projectsData[filteredKey];
        });
    };
    console.log("[PROYECTS]: ", projectsData)
    return (
        <ProjectsContext.Provider
            value={{
                projectsData,
                handleProjectDataChange,
                handleFilteredProjects
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
};