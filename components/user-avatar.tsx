import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "./ui/avatar"

interface UserAvatarProps {
    src?: string;
    className?: string;
}

const UserAvatar = ({
    src,
    className,
}: UserAvatarProps) => {
    return (
        <Avatar className={cn(
                "w-7 h-7 md:h-10 md:w-10", 
                className
            )}>
            <AvatarImage
                src={src}
                className={className}
            />
        </Avatar>
    )
}

export default UserAvatar