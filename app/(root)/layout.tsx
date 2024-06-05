export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p className="text-white-1">LEFT SIDEBAR</p>
      <div>{children}</div>
      <p className="text-white-1">RIGHT SIDEBAR</p>
    </div>
  );
}
