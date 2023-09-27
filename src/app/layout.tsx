import Header from '@/components/header'
import '@/app/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <footer className="bg-[#092b5a] text-white py-4 text-center">
          &copy; 2023 Placas.com. Todos os direitos reservados.
        </footer>
        </body>
    </html>
  )
}
