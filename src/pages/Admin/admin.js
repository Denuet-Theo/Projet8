import Head from "next/head"
import LayoutAdmin from "../../components/Admin/LayoutAdmin"
import AuthRoute from '../../HOC/AuthRoute'
import React, { useState, useEffect, useRef, Component, useContext } from 'react'
import { collection,doc, getDocs, getDoc } from 'firebase/firestore'
import { db } from '../../../firebase'
//import Cards from '../../components/Cards'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Cards = dynamic(() => import('../../components/Cards'))


export default function admin({entries}) {

  return (
    <LayoutAdmin>
      <AuthRoute>
        <Head>
          <title>Admin Board - Mon Portfolio</title>
          <meta name="description" content={`Ici se trouve le board d'administration permettant de faire les changements du portfolio`} />
          <meta property='og:title' content={`Admin Board - Mon Portfolio`} />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <section>
          <h1 className='text-5xl flex justify-center mt-10 m-auto w-[90%]'>Voici les travaux de mon Portfolio</h1>
          <Link href="/Admin/creatework" className="m-auto flex mt-[50px]">
            <button aria-label="Redirection vers la page de création de projet" className='btn btn-info mt-4 hover:bg-slate-800 bg-[#424242] m-auto'>Ajouter un nouveau projet</button>
          </Link> 
          <div className='mb-32 mt-36 lg:grid lg:grid-cols-3 gap-8 ml-4 mr-4 flex flex-col'>
            {entries.map((entrie,i) => {
              return(
                <Link key={i} href={`/Admin/affiliations/${entrie.id}`}>
                  <Cards>
                    <div className='flex m-auto text-center'>
                      <h2 className='text-base font-black underline m-auto'>{entrie.Titre}</h2>
                    </div>
                    <p className='text-sm font-semibold'>{entrie.Languages}</p>
                    <div className='w-full h-[310px] relative'>
                      <Image src={entrie.ImageUrl} sizes="(max-width: 768px) 100%" title={`Miniature de la photo du ${entrie.Titre}`} alt={`Miniature de la photo du ${entrie.Titre}`} className='object-cover mt-2' priority={true} fill={true}/>
                    </div>
                  </Cards>
                </Link>
             )})}
          </div>
        </section>
     </AuthRoute>
    </LayoutAdmin>
  )
}

export async function getServerSideProps(){
const databaseRef = collection(db,"Travaux")
const data = await getDocs(databaseRef)
const entries = JSON.parse(
JSON.stringify(data.docs.map((doc) => ({ ...doc.data(),id: doc.id})))
)
  return{
      props: {
          entries,
      },
  }
}