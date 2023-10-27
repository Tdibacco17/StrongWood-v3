import { FieldToCompleteProps } from '@/types/ContactTypes'
import styles from './FieldToCompleteComponent.module.scss'

export default function FieldToCompleteComponent({
    fieldProps,
    inputRef,
    noteRef,
}: FieldToCompleteProps) {
    if (noteRef) {
        return (
            <label className={`${styles['wrapper-label']}`}>
                <p className={styles['text-custom']}>{fieldProps.label}</p>
                <textarea
                    className={`${styles['area-custom']}`}
                    // required
                    name={fieldProps.input.name}
                    placeholder={fieldProps?.input.placeholder}
                    ref={noteRef} />
            </label>
        )
    }
    return (
        <label className={styles['wrapper-label']}>
            <p className={styles['text-custom']}>{fieldProps.label}</p>
            <input
                className={`${styles['input-custom']}`}
                // required
                type={fieldProps.input.type}
                name={fieldProps.input.name}
                placeholder={fieldProps?.input.placeholder}
                ref={inputRef} />
        </label>
    )
}