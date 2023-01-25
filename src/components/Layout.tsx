import React, { FC } from 'react'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
