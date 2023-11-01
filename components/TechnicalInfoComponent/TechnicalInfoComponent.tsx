import { TechnicalInfoInterface } from "@/types/ProjectsTypes"
import styles from "./TechnicalInfoComponent.module.scss"
import data from "@/models/es.json"
import Link from "next/link"

export default function TechnicalInfoComponent({
    technicalInfo,
}: {
    technicalInfo: TechnicalInfoInterface,
}) {
    {/* SACAR ESTA VALIDACION CUANDO COMPLETE EL RESTO DE PROJECTDATA */ }
    return (
        <div className={`${styles["container-section-technical-info"]}`}>
            {technicalInfo &&
                <>
                    <div className={styles["container-body-info"]}>
                        <p className={styles["header-title"]}>{technicalInfo.title}</p>
                        <div className={styles["description-info"]}>
                            {technicalInfo.footer && <p>{data.projectDetail.titleDescription}</p>}
                            <div>
                                {/* SACAR ESTA VALIDACION CUANDO COMPLETE EL RESTO DE PROJECTDATA */}
                                {technicalInfo.description?.map((item: string, index: number) => {
                                    return <p key={index} className={styles["description"]}>{item}</p>
                                })}
                            </div>
                        </div>
                    </div>
                    {/* SACAR ESTA VALIDACION CUANDO COMPLETE EL RESTO DE PROJECTDATA */}
                    {technicalInfo.footer ?
                        <div className={styles["container-footer-info"]}>
                            <p className={styles["row-wrapper"]}>
                                <span className={styles["item-left"]}>{data.projectDetail.footerTitles.materials}</span><span>{technicalInfo.footer.materials}</span>
                            </p>
                            <p className={styles["row-wrapper"]}>
                                <span className={styles["item-left"]}>{data.projectDetail.footerTitles.propousal}</span><span>{technicalInfo.footer.propousal}</span>
                            </p>
                            <p className={styles["row-wrapper"]}>
                                <span className={styles["item-left"]}>{data.projectDetail.footerTitles.year}</span><span>{technicalInfo.footer.year}</span>
                            </p>
                            <p className={styles["row-wrapper"]}>
                                <span className={styles["item-left"]}>{data.projectDetail.footerTitles.location}</span><span>{technicalInfo.footer.location}</span>
                            </p>
                        </div>
                        : <div className={styles["container-footer-home"]}>
                            <Link
                                className={styles["link"]}
                                href={data.homePage.redirects.projects.url}>
                                {data.homePage.redirects.projects.title}
                            </Link>
                        </div>
                    }
                </>
            }
        </div>
    )
}