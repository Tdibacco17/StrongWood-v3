import ProjectDetailContainer from "@/containers/ProjectDetailContainer/ProjectDetailContainer";

export default function ClosetDetailPage({ params }: { params: { slug: string } }) {
    return (
        <section>
            <ProjectDetailContainer params={params} projectSlug="closet" />
        </section>
    )
}