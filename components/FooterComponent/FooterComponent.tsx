import { IconInterface } from "@/types"
import styles from "./FooterComponent.module.scss"
import data from "@/models/es.json"
import IconComponent from "../IconComponent/IconComponent"
import BtnTopComponent from "./BtnScrollComponent/BtnScrollComponent"

export default function FooterComponent() {
    return (
        <section className={styles["container-section-footer"]}>
            <div className={styles["wrapper-footer"]}>
                <div className={styles["primary-footer"]}>
                    <div className={styles["container-networks-icon"]}>
                        {
                            Object.values(data.footer.networks).map((iconData: IconInterface) => {
                                return <IconComponent key={iconData.iconSlug} iconData={iconData} isAnchor={true} />
                            })
                        }
                    </div>
                    <BtnTopComponent
                        scrollTo={false}
                        title={data.footer.politic}
                        position={"center"}
                    />
                    <BtnTopComponent
                        scrollTo={true}
                        title={data.footer.scrollTo}
                        position={"right"}
                    />
                </div>
                <div className={styles["secondary-footer"]}>
                    <small className={styles["text-company"]}>{data.footer.company}</small>
                </div>
            </div>
        </section>
    )
}