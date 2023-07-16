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
            <div className="sm:flex grid grid-cols-2">
              <Link href="/" className='btn btn-ghost rounded-btn'>Choix Utilisateur</Link>  
              <Link href="/Admin/admin" className='btn btn-ghost rounded-btn'>Accueil Admin</Link>
              {!currentUser && <Link href="/Admin/LoginPage" className="btn btn-ghost rounded-btn">Connexion</Link>}
              {currentUser && <button aria-label='Se deconnecter' className='btn btn-ghost rounded-btn' onClick={signOutHandler}>Deconnexion </button>}
            </div>
          </nav>
        </header> 
       
    )
}