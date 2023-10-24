import Image from "next/image"
import styles from "./TwoSmallImgComponent.module.scss"
import { ImgDataInterface } from "@/types"
import ImgPlaceholderComponent from "../ImgPlaceholderComponent/ImgPlaceholderComponent";
import ColumnCardComponent from "./ColumnCardComponent/ColumnCardComponent";

export default function TwoSmallImgComponent({
    imagesData,
}: {
    imagesData: ImgDataInterface[],
}) {
    return (
        <div className={`${styles["container-section-twoImages"]}`}>
            {
                imagesData.map((imageData: ImgDataInterface, index: number) => {
                    return (
                        <div key={index} className={`${styles["container-column"]} ${index === 1 && styles["second"]}`}>
                            <ColumnCardComponent
                                imageData={imageData}
                                index={index} />
                        </div>
                    )
                })
            }
        </div>
    )
}