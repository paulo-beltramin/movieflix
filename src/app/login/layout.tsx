import "@/styles/globals.css"
import { Toaster } from "react-hot-toast"


export const metadata = {
  title: 'Login',
}

export default function FormsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       <>
        {children}
       <Toaster position="top-center"/>
       </>
        </body>
    </html>
  )
}
