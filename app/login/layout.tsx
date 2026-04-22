import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testing Next JS-Login Page",
  description: "Login Page",
};
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      {children} {/* no navbar, just centered */}
    </div>
  );
}
