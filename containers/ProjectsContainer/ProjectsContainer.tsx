'use client'
import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import { ProjectsContext } from "@/context/ProjectsContextProvider";
import { ProjectsDataContextInterface } from "@/types";
import { useContext, useEffect } from "react";

export default function ProjectsContainer() {
    const { handleProjectDataChange } = useContext(ProjectsContext) as ProjectsDataContextInterface;

    useEffect(() => {
        (async () => {
            if (handleProjectDataChange) {
                const rawData = await fetch("/api/getAllProjects", {
                    method: "GET",
                    headers: {
                        "Accept": "application/json, text/plain",
                        "Content-Type": "application/json",
                    },
                });
                const parsedData = await rawData.json();
                if (parsedData.error) {
                    return;
                }
                handleProjectDataChange &&
                    handleProjectDataChange(parsedData.data);
            }
        })();
    }, []);

    return <ProjectsComponent />
}