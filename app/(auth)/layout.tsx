export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-indigo-500 h-full text-white">
            {children}
        </div>
    );
}
