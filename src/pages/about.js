import Head from "next/head"
import React from 'react'
import { collection,doc, getDocs, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import Layout from "../components/Layout"
import dynamic from 'next/dynamic'

const GenerateCvPdf = dynamic(() => import('../components/Pdf/GenerateCvPdf'))
const Collapse = dynamic(() => import('../components/Collapse'))

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
                    <Collapse need={textunique}/>
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
    JSON.stringify(data.docs.map((doc) => ( doc.data().Competences)))
   )
   const settext = new Set(entries)
    const textunique = [...settext]
    console.log(textunique)

    return{
        props: {
            textunique,
        },
    }
}