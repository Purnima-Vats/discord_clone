import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/components/providers/modal-provider";
import { SocketProvider } from "@/components/providers/socket-provider";
import { QueryProvider } from "@/components/providers/query-provider";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Discord Clone",
    description: "A chat application built with Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
                    <main>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="dark"
                            enableSystem={false}
                            // forcedTheme="dark"
                            storageKey="discord-theme"
                        >
                            <SocketProvider>
                                <ModalProvider/>
                                <QueryProvider>
                                    {children}
                                </QueryProvider>
                            </SocketProvider>
                        </ThemeProvider>
                    </main>
                </body>
            </html>
        </ClerkProvider>
    );
}
