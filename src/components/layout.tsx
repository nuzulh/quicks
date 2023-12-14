import { ReactNode } from "react";
import { Sidebar, Topbar } from ".";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({
  children,
}: LayoutProps) {
  return (
    <div className="bg-background w-screen h-screen flex">
      <Sidebar />
      <main className="w-full overflow-x-hidden">
        <Topbar />
        {children}
      </main>
    </div>
  );
}
