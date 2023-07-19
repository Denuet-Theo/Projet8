import Head from "next/head"
import React from 'react'
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../../firebase'
import Layout from "../components/Layout"
import dynamic from 'next/dynamic'

const GenerateCvPdf = dynamic(() => import('../components/Pdf/GenerateCvPdf'))
const Collapse = dynamic(() => import('../components/Collapse'))

export default function About({entries}){
    return(
            <Layout>
                <Head>
                    <title>A propos - Mon Portfolio</title>
                    <meta name="description" content="Sur cette page je vais vous presentez diverses choses a propos de moi"/>
                    <meta property='og:title' content='A propos - Mon Portfolio'/> 
                    <link rel='icon' href='/favicon.ico'/>
                </Head>
                <section className="m-auto flex flex-col justify-center">
                    <h1 className="m-auto sm:text-4xl text-3xl mb-20 mt-20 text-center">En savoir plus sur moi...</h1>
                    <div className="mb-[200px] sm:text-2xl text-xl md:text-3xl w-[90%] m-auto leading-[42px] text-center">
                        Je suis passionné par le domaine du web depuis mes années lycées où j'ai commencé à apprendre diverses façons de coder, à petite échelle 
                        bien sûr ! Je m'en suis écarté pendant quelques années afin d'assouvir mon envie d'enseigner les mathématiques. Durant ce parcours, j'ai eu l'occasion d'assister à
                        quelques cours d'informatique, ce qui a fait renaître cette envie de travailler dans cette branche et pourquoi pas d'apporter mon aide à d'autres personnes.
                       <br></br> Actuellement, j'ai pour objectif d'acquérir toujours plus de connaissances. Ayant de base une attirance pour le Frontend, je commence à m'orienter vers le full-stack 
                        et à concevoir des projets en accord avec cela.
                        Je suis maintenant capable de developper une application web dans divers langages grâce au temps passé à apprendre et j'espère encore avoir l'occasion d'étoffer tout cela.    
                    </div>
                    <Collapse need={entries}/>
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
    return{
        props: {
            entries
        },
    }
}