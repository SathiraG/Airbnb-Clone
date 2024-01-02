import { useState } from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Card from './components/Card'
import Footer from './components/Footer'

export default function(){
  return (
      <div>
        <Navbar />
        <Menu />
        <Card />
        <Footer />
      </div>
  )
}
