import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Helmet } from "react-helmet";
import urwdin from '../fonts/URWDIN-Bold.woff'
import brolga from '../fonts/Brolga.woff'
import dooms from '../fonts/DoomsDay.woff'
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Helmet>
        <link rel="preload" href={urwdin} as="fonts/woff" crossOrigin="anonymous" type="font/woff2" />
        <link rel="preload" href={brolga} as="fonts/woff" crossOrigin="anonymous" type="font/woff2" />
        <link rel="preload" href={dooms} as="fonts/woff" crossOrigin="anonymous" type="font/woff2" />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout