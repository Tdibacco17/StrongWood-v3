import BannerComponent from "@/components/BannerComponent/BannerComponent";
import data from "@/models/es.json"

export default function AboutMePage() {
    return (
        <section>
            <BannerComponent imageData={data.homePage.banner.image} />
        </section>
    )
}