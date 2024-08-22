import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface ChannelIdPageProps {
    params: {
        serverId: string;
        channelId: string;
    }
}

const ChannelIdPage = async({
    params
}: ChannelIdPageProps) => {
    const profile = await currentProfile();

    if(!profile) {
        return redirect('/sign-in');
    }

    const channel = await db.channel.findUnique({
        where: {
            id: params.channelId,
        },
    })

    const member = await db.member.findFirst({
        where: {
            serverId: params.serverId,
            profileId: profile.id,
        }
    });

    if(!channel || !member) {
        redirect('/');
    }

    return (
        <div className="bg-white dark:bg-[#313338] flex flex-col h-screen">
            <ChatHeader
                name={channel.name}
                serverId={channel.serverId}
                type="channel"
            />
            <div className="flex-1 mb-auto">
                Future Messages
            </div>
            <ChatInput
                name={channel.name}
                type="channel"
                apiUrl="/api/socket/messages"
                query={{
                    channelId: channel.id,
                    serverId: channel.serverId,
                }}
            />
        </div>
    )
}

export default ChannelIdPage