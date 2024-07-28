export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex items-center justify-center h-screen overflow-hidden">
            {children}
        </div>
    );
}
