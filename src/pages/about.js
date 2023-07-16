import Head from "next/head"
//import GenerateCvPdf from '../components/Pdf/GenerateCvPdf'
import React, { useState, useEffect, useRef, Component, useContext } from 'react'
import { collection,doc, getDocs, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import Layout from "../components/Layout"
import dynamic from 'next/dynamic'

const GenerateCvPdf = dynamic(() => import('../components/Pdf/GenerateCvPdf'))

export default function About({textunique}){
    return(
            <Layout>
                <Head>
                    <title>A propos - Mon Portfolio</title>
                    <meta name="description" content="Sur cette page je vais vous presentez diverses choses a propos de moi"/>
                    <meta property='og:title' content='A propos - Mon Portfolio'/> 
                    <link rel='icon' href='/favicon.ico'/>
                </Head>
                <section className="m-auto flex flex-col justify-center">
                    <h1 className="m-auto text-4xl mb-20 mt-20">En savoir plus sur moi !</h1>
                    <div className="mb-[200px] text-3xl w-[90%] m-auto">
                        Je suis passionné par le domaine du web depuis mes années lycées au j'ai commencé a apprendre diverses façon de coder a petites échelle 
                        bien sur ! Après m'en être écarté pendant quelques années afin d'asouvir mon envie d'enseigner, les mathématiques en l'occurence, j'ai eu pendant ce parcours 
                        quelques petits cours d'informatique qui m'ont redonné cette envie d'y retourné et pourquoi pas d'apporter mon aide a d'autres personnes dans ce domaine.
                        Actuellement, j'essaie avant tout d'apprendre encore et encore plus de choses, étant de base attiré vers le frontend je commence a m'orienter vers le full-stack 
                        et a concevoir des projets en accord avec cela.
                        Je suis capable de devellopé dans divers languages grâce au temps passé a apprendre et j'espère encore étoffer tout cela.    
                    </div>
                    <div className="collapse bg-base-200 w-[70%] m-auto">
                        <input type="checkbox" id="collapse1" name="collapse1" className="h-[100px]" aria-label="Cliquez pour afficher"/> 
                        <div className="collapse-title text-3xl font-medium m-auto">
                            Quelles sont mes Compétences ? 
                        </div>
                        <div className="collapse-content"> 
                            <ul className="grid grid-cols-3 m-auto text-center pt-10 pb-10">
                                {textunique.map((element,i)=>{
                                    return(
                                        <li key={i} className="text-3xl pb-3">- {element}</li>
                                    )
                                })}
                                <li className="text-3xl">- NEXT </li>
                                <li className="text-3xl">- Firebase </li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse bg-base-200 mt-11 w-[70%] m-auto">
                        <input type="checkbox" id="collapse2" name="collapse2" className="h-[100px]" aria-label="Cliquez pour afficher"/> 
                        <div className="collapse-title text-4xl font-medium m-auto">
                            Quelles ambitions professionelles ? 
                        </div>
                        <div className="collapse-content"> 
                            <p className="m-auto text-3xl pt-10 pb-10">Etant encore un jeune devellopeur, je cherche avant tout a continuer d'apprendre, continuer de m'améliorer dans les domaines
                                que j'affectionnent comme par exemple le javascript et plus particulièrement React et Next. Cependant ayant commencé récemment le backend avec mongoDb 
                                et encore plus récemment Firebase j'aimerai être capable de lier tout cela.
                                C'est pour cela que je recherche une formation en alternance spécialisé en React ou bien Next afin d'approfondir mes connaissances ou alors un poste du même type me permettant une 
                                bonne conditions d'apprentissage et d'améliorations
                            </p>
                        </div>
                    </div>
                    <div className="m-auto">
                        <GenerateCvPdf/>
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
   const entries2 = JSON.parse(
    JSON.stringify(data.docs.map((doc) => ( doc.data().Competences)))
   )
   const settext = new Set(entries2)
    const textunique = [...settext]
    console.log(textunique)

    return{
        props: {
            textunique,
        },
    }
}