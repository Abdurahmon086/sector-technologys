import type { Metadata } from "next";
import Footer from "./_components/footer";
import Header from "./_components/header";
import "./globals.css";
import Asider from './_components/asider'

export const metadata: Metadata = {
    title: "Sector Technology",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <header>
                    <Header />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
                <aside className='fixed top-52 right-0'>
                    <Asider />
                </aside>
            </body>
        </html>
    );
}
