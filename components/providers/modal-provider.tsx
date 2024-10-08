"use client"

import { useEffect, useState } from "react"
import { CreateServerModal } from "../Modals/create-server-modal"
import { InviteModal } from "../Modals/invite-modal"
import { EditServerModal } from "../Modals/edit-server-modal"
import { MembersModal } from "../Modals/members-modal"
import { CreateChannelModal } from "../Modals/create-channel-modal"
import { LeaveServerModal } from "../Modals/leave-server-modal"
import { DeleteServerModal } from "../Modals/delete-server-modal"
import { DeleteChannelModal } from "../Modals/delete-channel-modal"
import { EditChannelModal } from "../Modals/edit-channel-modal"
import { MessageFileModal } from "../Modals/message-file-modal"
import { DeleteMessageModal } from "../Modals/delete-message-modal"

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
            <CreateChannelModal/>
            <LeaveServerModal/>
            <DeleteServerModal/>
            <DeleteChannelModal/>
            <EditChannelModal/>
            <MessageFileModal/>
            <DeleteMessageModal/>
        </>
    )
}