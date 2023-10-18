import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent";
import data from "@/models/es.json"

export default function AboutMePage() {
    return (
        <section>
            <PortraitImgComponent imageData={data.homePage.banner.image} />
        </section>
    )
}