import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../../context/AuthContext'

export default function AdminHeader() {
const {logout, currentUser } = useAuth()
    

const signOutHandler = async () => {
        logout();
  };

    return (
        <header className="bg-grey">
          <nav className="sm:px-12 sm:py-8 flex sm:justify-end justify-center">
          <div className="navbar rounded-box">
  <div className="flex-1 px-2 lg:flex-none">
    <span className="text-lg font-bold">Admin</span>
  </div> 
  <div className="flex justify-end flex-1 px-2">
    <div className="flex items-stretch">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost rounded-btn">Menu</label>
        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
        <li><Link href="/" className='btn btn-ghost rounded-btn'>Visiteur</Link></li>
      <li><Link href="/Admin/admin" className='btn btn-ghost rounded-btn'>Accueil Admin</Link></li>
      {currentUser && 
      <li><button aria-label='Se deconnecter' className='btn btn-ghost rounded-btn' onClick={signOutHandler}>Deconnexion </button></li>}
        </ul>
      </div>
    </div>
  </div>
</div>
          </nav>
        </header> 
       
    )
}
