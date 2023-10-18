import ProjectDetailContainer from "@/containers/ProjectDetailContainer/ProjectDetailContainer";

export default function BathroomDetailPage({ params }: { params: { slug: string } }) {
    return (
        <section>
            <ProjectDetailContainer params={params} projectSlug="bathroom" />
        </section>
    )
}