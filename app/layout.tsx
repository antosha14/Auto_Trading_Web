import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Singularity | Automatic portfolio manager powered by AI",
  description: "Created as a portfolio project by Kozel Anton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="_next" className="relative">
          <header className="box-border flex justify-center items-center bg-blue-400 sticky h-16 z-30">
            <div className="flex items-center h-full justify-between w-full py-4 mx-auto">
              <a href="/" className="pointer box-border">
                <span title="Singularity" className="text-2xl">
                  Singularity
                </span>
              </a>
              <div className="grid grid-cols-my-columns ml-8">
                <div className="flex box-border justify-between">
                  <div>
                    <a
                      href="/"
                      className="hover:text-black py-2 px-3 mx-1 text-nowrap"
                    >
                      Current portfolio
                    </a>
                  </div>
                  <div>
                    <a
                      href="/"
                      className="hover:text-black py-2 px-3 mx-1 text-nowrap"
                    >
                      Portfolio history
                    </a>
                  </div>
                  <div>
                    <a
                      href="/"
                      className="hover:text-black py-2 px-3 mx-1 text-nowrap"
                    >
                      Transaction history
                    </a>
                  </div>
                </div>
                <span>
                  <div className="w-56">
                    <span className="flex">
                      <a href="/" className="pointer hover:text-black">
                        <span></span>
                        <span>Log in</span>
                      </a>
                      <a href="/" className="pointer hover:text-black">
                        <span></span>
                        <span>Sign up</span>
                      </a>
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </header>
          <main>{children}</main>
          <footer className="flex box-border items-center bg-blue-100 sticky h-8">
            <div className="flex items-center h-full justify-between py-4 mx-16 ">
              <span className="text-black text-sm">© Kozel Anton 2024</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
