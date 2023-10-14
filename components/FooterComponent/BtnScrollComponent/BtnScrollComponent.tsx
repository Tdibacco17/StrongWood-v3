'use client'
import { handleScrollToSection } from '@/utils/scroll/scrollToSection'
import styles from "./BtnScrollComponent.module.scss"
import Link from 'next/link'
export default function BtnTopComponent({ scrollTo, title, position }: { scrollTo: boolean, title: string, position: string }) {
    if (scrollTo) {
        return (
            <div className={`${styles["container-text"]} ${styles[`${position}`]}`}
                onClick={() => handleScrollToSection("top")}>
                <span className={`${styles["text"]}`}>{title}</span>
            </div>
        )
    }

    return (
        <Link aria-label={`Ir a ${title}`} href={`/`} className={`${styles["container-text"]} ${styles[`${position}`]}`}>
            <span className={`${styles["text"]}`}>{title}</span>
        </Link>
    )
}