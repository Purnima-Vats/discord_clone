"use client"

import qs from "query-string"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { Video, VideoOff } from "lucide-react"

import ActionTooltip from "@/components/ActionTooltip"

const ChatVideoButton = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const isVideo = searchParams?.get("video");

    const onClick = () => {
        const url = qs.stringifyUrl({
            url: pathname || "",
            query: {
                video: isVideo ? undefined : true,
            }
        }, {skipNull: true});

        router.push(url)
    }

    const Icon = isVideo ? VideoOff : Video;
    const tooltipLabel = isVideo ? "End video call" : "Start video call";

    return (
        <ActionTooltip
            label={tooltipLabel}
            side="bottom"
            align="start"
        >
            <button onClick={onClick} className="hover:opacity-75 transition mr-4">
                <Icon className="w-6 h-6 text-zinc-500 dark:text-zinc-400 " />
            </button>
        </ActionTooltip>
    )
}

export default ChatVideoButton