export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <nav>Layout store</nav>
            {children}
        </main>
    );
}