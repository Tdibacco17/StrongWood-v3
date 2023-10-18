import ProjectDetailContainer from "@/containers/ProjectDetailContainer/ProjectDetailContainer";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    return (
        <section>
            <ProjectDetailContainer params={params} projectSlug="products" />
        </section>
    )
}