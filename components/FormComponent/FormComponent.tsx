import { ContactProps } from "@/types/ContactTypes"
import styles from "./FormComponent.module.scss"
import data from "@/models/es.json"
import FieldToCompleteComponent from "./FieldToCompleteComponent/FieldToCompleteComponent"

export default function FormComponent({
    nameRef,
    phoneRef,
    emailRef,
    directionRef,
    locationRef,
    noteRef
}: ContactProps) {
    return (
        <form className={styles["container-form"]}>
            <p className={styles["form-title"]}>{data.contactPage.subtitle}</p>
            <div className={styles["inputs-container"]}>
                <FieldToCompleteComponent fieldProps={data.contactPage.formFields.name} inputRef={nameRef} />
                <FieldToCompleteComponent fieldProps={data.contactPage.formFields.phone} inputRef={phoneRef} />
                <FieldToCompleteComponent fieldProps={data.contactPage.formFields.email} inputRef={emailRef} />
                <FieldToCompleteComponent fieldProps={data.contactPage.formFields.direction} inputRef={directionRef} />
                <FieldToCompleteComponent fieldProps={data.contactPage.formFields.location} inputRef={locationRef} />
            </div>
            <FieldToCompleteComponent fieldProps={data.contactPage.formFields.note} noteRef={noteRef} />
        </form>
    )
}