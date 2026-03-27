import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-void noise">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
