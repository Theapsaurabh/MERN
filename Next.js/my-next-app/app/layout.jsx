import Navigation from "@/components/Navigation";
import "./globals.css"



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
       <Navigation/>
        <h1>Main Layout</h1>
        {children}
      </body>
    </html>
  );
}
