import './globals.css'
import Header from './common/components/Header'
import FooterDesktop from './common/components/Footer/FooterDesktop'
import FooterMobile from './common/components/Footer/FooterMobile'

export const metadata = {
  title: 'Mercado Libre',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className='bg-[#ebebeb] flex flex-col justify-between min-h-screen'>
        <div>
          <Header />
          {children}
        </div>
        {/* <FooterDesktop /> */}
        <FooterMobile />
      </body>
    </html>
  )
}
