"use client"

import { useEffect, useState } from "react"
import { CreateServerModal } from "../Modals/create-server-modal"
import { InviteModal } from "../Modals/invite-modal"
import { EditServerModal } from "../Modals/edit-server-modal"
import { MembersModal } from "../Modals/members-modal"

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
            <EditServerModal/>
            <MembersModal/>
        </>
    )
}