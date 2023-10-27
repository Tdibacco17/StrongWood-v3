'use client'
import { ProductDetailContext } from "@/context/ProjectsContextProvider";
import { useContext, useEffect } from "react";
import { projectsData } from "@/models/projects";
import ProjectDetailComponent from "@/components/ProjectDetailComponent/ProjectDetailComponent";
import { ProjectsDataContextInterface, SelectedFilterInterface } from "@/types/ProjectsTypes";

export default function ProjectDetailContainer({ params, projectSlug }: { params: { slug: string }, projectSlug: SelectedFilterInterface }) {
    const { handleProjectDataChange } = useContext(
        ProductDetailContext
    ) as ProjectsDataContextInterface

    useEffect(() => {
        if (params.slug) {
            handleProjectDataChange &&
                handleProjectDataChange(projectsData[params.slug]);
        }
    }, [params.slug]);
    return <ProjectDetailComponent projectSlug={projectSlug} />
}