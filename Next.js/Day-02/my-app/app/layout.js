

import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html>
      
      <body>
        <h1>Hello from layout</h1>
        {children}
      </body>
    </html>
  )
}
