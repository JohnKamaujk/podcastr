import LeftSidebar from "@/components/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <LeftSidebar />
      <div>{children}</div>
      <p className="text-white-1">RIGHT SIDEBAR</p>
    </div>
  );
}
