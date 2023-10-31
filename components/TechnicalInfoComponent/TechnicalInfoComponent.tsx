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
                            <div className={styles["footer-column"]}>
                                {
                                    data.projectDetail.footer.map((item: string, index: number) => {
                                        return <p key={index}>{item}</p>
                                    })
                                }
                            </div>
                            <div className={styles["footer-column"]}>
                                <p>{technicalInfo.footer.materials}</p>
                                <p>{technicalInfo.footer.propousal}</p>
                                <p>{technicalInfo.footer.year}</p>
                                <p>{technicalInfo.footer.location}</p>
                            </div>
                        </div>
                        : <div className={styles["container-footer-home"]}>
                            <p className={styles["header-title"]}>{ }</p>
                            <div>
                            </div>
                            <Link
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