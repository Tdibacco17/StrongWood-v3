'use client'
import FormComponent from "@/components/FormComponent/FormComponent";
import { useRef } from "react";

export default function FormContainer() {
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const directionRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);
    const noteRef = useRef<HTMLTextAreaElement>(null);

    return <FormComponent
        nameRef={nameRef}
        phoneRef={phoneRef}
        emailRef={emailRef}
        directionRef={directionRef}
        locationRef={locationRef}
        noteRef={noteRef}
    />
}