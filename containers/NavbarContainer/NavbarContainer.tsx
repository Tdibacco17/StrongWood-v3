'use client'
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { NavInterface } from "@/types";
import { useScrollPosition } from "@/utils/scroll/useScrollPosition";
import { useState } from "react";

export default function NavbarContainer({
    navType
}: {
    navType: NavInterface
}) {
    const { isAtTop } = useScrollPosition();
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleIsOpen = (isCLose?: boolean) => {
        if (isCLose) {
            setIsOpen(false)
        } else {
            setIsOpen(!isOpen)
        }
    }

    return <NavbarComponent
        navType={navType}
        isAtTop={isAtTop}
        isOpen={isOpen}
        handleIsOpen={handleIsOpen}
    />
}