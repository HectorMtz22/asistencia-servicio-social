import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asistencia SS - FFyL",
  description: "Hector Flores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.principal_container}>
          {children}
        </main>
        <NavBar />
      </body>
    </html>
  );
}
