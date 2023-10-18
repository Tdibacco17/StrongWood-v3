import ProjectDetailContainer from "@/containers/ProjectDetailContainer/ProjectDetailContainer";

export default function KitchenDetailPage({ params }: { params: { slug: string } }) {
    return (
        <section>
            <ProjectDetailContainer params={params} projectSlug="kitchen" />
        </section>
    )
}