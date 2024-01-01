import { useState } from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Card from './components/Card'

export default function(){
  return (
      <div>
        <Navbar />
        <Menu />
        <Card />
      </div>
  )
}
