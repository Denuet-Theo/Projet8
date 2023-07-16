import React from 'react'
import Footer from '../../components/Footer'
import HeaderAdmin from "../Admin/HeaderAdmin"
import { AuthProvider } from '../../context/AuthContext'

export default function LayoutAdmin(props) {
    
    const { children } = props
    return (
        <AuthProvider>
            <div className='flex flex-col min-h-screen relative bg-slate-900 text-white'> 
                <HeaderAdmin/>
                <main className='flex-1 flex flex-col p-4'>
                    {children}
                </main>
                <Footer/>
            </div>
        </AuthProvider>
    )
}