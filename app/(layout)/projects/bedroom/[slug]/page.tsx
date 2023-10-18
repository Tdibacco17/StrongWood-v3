import ProjectDetailContainer from "@/containers/ProjectDetailContainer/ProjectDetailContainer";

export default function BedroomDetailPage({ params }: { params: { slug: string } }) {
    return (
        <section>
            <ProjectDetailContainer params={params} projectSlug="bedroom" />
        </section>
    )
}