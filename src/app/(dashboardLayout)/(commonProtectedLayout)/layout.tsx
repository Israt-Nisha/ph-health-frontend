
export default function CommonProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    common protected layout
      {children}
    </>
  );
}
