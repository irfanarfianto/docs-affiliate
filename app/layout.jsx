import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'Panduan Affiliate 2026',
  description: 'Panduan lengkap dan mindset untuk Affiliate TikTok dan Shopee 2026',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="id" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={<Navbar logo={<b>Affiliate 2026</b>} />}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
