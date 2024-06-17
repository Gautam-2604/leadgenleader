
import { Inter } from "next/font/google";
import LandingPageNavbar from "./components/LandingPageNavbar";



const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen flex-col overflow-x-clip">
        <LandingPageNavbar />
    
    <div className="flex-grow">{children}</div>
    </section>
    
  );
}
