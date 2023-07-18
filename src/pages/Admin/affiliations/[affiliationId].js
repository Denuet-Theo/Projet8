import React, { useState, useEffect, useRef } from 'react'
import { collection,doc, getDocs, getDoc, where, query, deleteDoc } from 'firebase/firestore'
import { db } from '../../../../firebase'
import Head from "next/head"
//import BtnDelete from '../../../components/BtnGestion/BtnDelete';
//import BtnUpdatetext from '../../../components/BtnGestion/BtnUpdatetext';
import Image from 'next/image';
import LayoutAdmin from '../../../components/Admin/LayoutAdmin';
import AuthRoute from '../../../HOC/AuthRoute';
import dynamic from 'next/dynamic'

const BtnDelete = dynamic(() => import('../../../components/BtnGestion/BtnDelete'))
const BtnUpdatetext = dynamic(() => import('../../../components/BtnGestion/BtnUpdatetext'))

export default function AdminAffiliation({ entries}) {
    return (   
      <LayoutAdmin>
        <AuthRoute>
          <Head>
            <title>Admin {entries[0].Titre} - Mon Portfolio</title>
            <meta name="description" content={`Board Admin,Apprend en plus sur le ${entries[0].Titre} au travers de cette présentation et son PDF`} />
            <meta property='og:title' content={`Admin ${entries[0].Titre} - Mon Portfolio`} />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <section>
            {entries.map((entrie, i) => {
              return (
                <div className="hero bg-base-200 mt-7" key={i}>
                  <div className="w-[100%]">
                    <div className='flex justify-center'>
                      <h1 className='text-5xl font-bold mt-5 mb-10'>{entrie.Titre}</h1>
                    </div>
                    <h2 className='py-6 text-3xl font-semibold text-center'>{entrie.Languages}</h2>
                    <div className='text-center mt-16 mb-7'>
                      <p className='py-6 text-3xl w-[100%] m-auto'>Voici le {entrie.Titre}, je vous invite a le téléchargé en pdf.<br></br>La description de ce document se trouve dans le fichier, il vous sera plus facile de comprendre celui-ci, bonne lecture !</p>
                    </div>
                    <div className='m-auto text-center'>
                      <div className='relative w-[90%] h-[500px] lg:h-[1000px] m-auto'>
                      <Image src={entrie.ImageUrl} alt={`Image réprésentative du ${entrie.Titre}`} title={`Photo du ${entrie.Titre}`} className='w-[80%] m-auto' fill={true} />
                      </div>
                      <div className='flex flex-col items-center'>
                        <p className='py-6 text-xl ml-5 items-center'>{entrie.UrlGithub}</p>
                        <div className='flex mb-12 mt-8 items-center justify-center md:flex-row flex-col'>
                          <BtnDelete need={entries}/>
                          <BtnUpdatetext need={entries}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </AuthRoute>
      </LayoutAdmin>
    )
  }
  
  export async function getServerSideProps({ params }) {
   const affiliationId=params.affiliationId
   const databaseRef = doc(db,"Travaux",affiliationId)
   const data = await getDoc(databaseRef)
   const entries = JSON.parse(
    JSON.stringify([data.data()])
   )
   if(entries[0] == null ){
    return{
      notFound : true,
    }
  }else{
    return {
      props: {
        entries,
      }
    }
  }
  }
