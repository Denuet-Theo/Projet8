import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function erreur() {
  return (
    <Layout>
    <section className='flex m-auto flex-col'>
      <Head>
        <title>Erreur 404 - Mon Portfolio</title>
        <meta name="description" content={`Ceci est la page d'erreur, veuillez vous réorientez via la navigation en haut en de l'écran`}/>
        <meta property='og:title' content="Erreur 404 - Mon Portfolio"/> 
        <link rel='icon' href='/favicon.ico'/>
      </Head>
        <h1 className='m-auto text-8xl sm:text-9xl'>Erreur 404</h1>
        <p className='mt-10 text-3xl'>Cette page n'existe pas, vous pouvez retourner aux pages principales via le menu de navigation en haut de votre écran</p>
    </section>
    </Layout>
  )
}
