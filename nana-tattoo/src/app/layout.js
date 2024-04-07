import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Booking from "@/components/Booking";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Loan - Tattoo Artist",
    description: "Loan is a tattoo artist based in Victoria, BC, Canada.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar/>
                <main>
                    {children}
                    <Booking/>
                </main>
                <Footer/>
                {/* <!-- Start Square Appointments Embed Code --> */}
                {/* <script src='https://squareup.com/appointments/buyer/widget/dfv677bef25jyo/LQ7XGC6J484Z0.js'></script> */}
                {/* <!-- End Square Appointments Embed Code --> */}
            </body>
        </html>
    );
}
