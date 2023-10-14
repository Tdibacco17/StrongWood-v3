import { IconInterface } from '@/types'
import styles from './IconComponent.module.scss'
import Link from 'next/link'

export default function IconComponent({
    iconData,
    isAnchor
}: {
    iconData: IconInterface,
    isAnchor: boolean
}) {

    if (isAnchor) {
        return (
            <Link href={iconData.href ?? ""} rel="noopener noreferrer" target="_blank"
                aria-label={`Icono de ${iconData.iconSlug}`} className={`${styles["container-icon-svg"]} ${styles[`${iconData.size}`]}`}>
                <svg fill="none" viewBox={iconData.viewBox} xmlns="http://www.w3.org/2000/svg">
                    {
                        iconData.path.map((item: string, index: number) => {
                            return <path key={index} stroke={iconData.stroke ?? ""} className={`${styles["icon-path"]} ${styles[`color-${iconData.color}`]}`} d={item} />
                        })
                    }
                </svg>
            </Link>
        )
    }

    return (
        <div className={`${styles["container-icon-svg"]} ${styles[`${iconData.size}`]}`}>
            <svg fill="none" viewBox={iconData.viewBox} xmlns="http://www.w3.org/2000/svg">
                {
                    iconData.path.map((itemPath: string, index: number) => {
                        return <path key={index} stroke={iconData.stroke ?? ""} className={`${styles["icon-path"]} ${styles[`color-${iconData.color}`]}`} d={itemPath} />
                    })
                }
            </svg>
        </div>
    )
}