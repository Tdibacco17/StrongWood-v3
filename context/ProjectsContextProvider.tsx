'use client'
import { ProjectDataInterface, ProjectsDataContextInterface, SelectedFilterInterface } from "@/types";
import { ReactNode, createContext, useState } from "react";

export const ProjectsContext = createContext<ProjectsDataContextInterface | {}>({});

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
    const [projectsData, setProjectsData] = useState<ProjectDataInterface>({});
    const [originProjectsData, setOriginProjectsData] = useState<ProjectDataInterface>({});

    const handleProjectDataChange = (projectData: ProjectDataInterface) => {
        setProjectsData(projectData);
        setOriginProjectsData(projectData);
    };

    const handleFilteredProjects = (filter: SelectedFilterInterface) => {
        const parsedObject: ProjectDataInterface = {};
        const filteredKeys = Object.keys(originProjectsData).filter(
            (projectKey: string) => {
                return originProjectsData[projectKey].categories.includes(filter);
            }
        );
        filteredKeys.forEach((projectKey: string) => {
            parsedObject[projectKey] = originProjectsData[projectKey];
        });
        setProjectsData(parsedObject);
    };

    return (
        <ProjectsContext.Provider
            value={{
                projectsData,
                handleProjectDataChange,
                handleFilteredProjects,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
};