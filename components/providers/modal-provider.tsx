"use client"

import { useEffect, useState } from "react"
import { CreateServerModal } from "../Modals/create-server-modal"
import { InviteModal } from "../Modals/invite-modal"

export const ModalProvider = () => {
    const [isMounted, setIsMounted ] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if(!isMounted) return null
    
    return (
        <>
            <CreateServerModal />
            <InviteModal />
        </>
    )
}