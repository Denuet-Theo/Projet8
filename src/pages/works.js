import React, { useState, useEffect, useRef, Component, useContext } from 'react'
import { collection,doc, getDocs, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import Head from "next/head"
import Image from 'next/image';
//import Cards from '../components/Cards'
import Link from 'next/link';
import Layout from '../components/Layout';
import dynamic from 'next/dynamic'

const Cards = dynamic(() => import('../components/Cards'))



export default function Works({entries}){
    return(
            <Layout>
                <Head>
                    <title>Mes Travaux - Mon Portfolio</title>
                    <meta name="description" content="Voici les travaux de mon Portfolio réalisé pendant ma formation chez OpenClassroom"/>
                    <meta property='og:title' content='Mes Travaux - Mon Portfolio'/> 
                    <link rel='icon' href='/favicon.ico'/>
                </Head>
                <section>
                    <h1 className='text-5xl flex justify-center mt-10 m-auto w-[90%]'>Voici les travaux de mon Portfolio</h1>
                    <div className='mb-32 mt-36 lg:grid lg:grid-cols-3 gap-8 ml-4 mr-4 flex flex-col'>
                        {entries.map((entrie,i) => {
                            return(
                                <Cards key={i}>
                                    <Link href={`/affiliations/${entrie.id}`}>
                                        <div className='flex m-auto text-center'>
                                            <h2 className='text-base font-black m-auto'>{entrie.Titre}</h2>
                                        </div>
                                        <p className='text-sm font-semibold'>{entrie.Languages}</p>
                                        <div className='w-full h-[310px] relative'>
                                            <Image src={entrie.ImageUrl} sizes="(max-width: 768px) 100%" title={`Miniature de la photo du ${entrie.Titre}`} alt={`Miniature de la photo du ${entrie.Titre} `} priority={true} className='object-cover mt-2' fill={true}/>
                                        </div>
                                    </Link>
                                </Cards>
                            )
                        })}
                    </div>
                </section>
            </Layout>
           
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

