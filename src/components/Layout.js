import React from 'react'
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"


export default function Layout(props) {
    const {children} = props
  return ( 
    <div className='flex flex-col min-h-screen relative bg-slate-900'>
      <NavBar />
      <main className='flex-1 flex flex-col p-4'>
        {children}
      </main>
      <Footer/> 
    </div>
  )
}
