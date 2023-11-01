export interface ContactProps {
    nameRef: React.RefObject<HTMLInputElement>,
    phoneRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    directionRef: React.RefObject<HTMLInputElement>,
    locationRef: React.RefObject<HTMLInputElement>
    noteRef: React.RefObject<HTMLTextAreaElement>;
}

export interface FieldToCompleteProps {
    fieldProps: FieldProps,
    inputRef?: React.RefObject<HTMLInputElement>,
    noteRef?: React.RefObject<HTMLTextAreaElement>;
}

export interface FieldProps {
    label: string,
    input: {
        type: string,
        name: string,
        placeholder: string,
    }
}