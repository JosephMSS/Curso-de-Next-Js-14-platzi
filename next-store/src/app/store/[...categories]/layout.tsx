export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <nav>Layout Category</nav>
      {children}
    </main>
  );
}
