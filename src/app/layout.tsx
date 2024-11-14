import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "개발자 성향 테스트",
  description: "당신의 프로그래밍 성향을 알아보세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
