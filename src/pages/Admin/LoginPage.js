import React from 'react'
import LayoutAdmin from '../../components/Admin/LayoutAdmin'
import Login from "../../components/Admin/Login"
import Head from 'next/head'

export default function LoginPage() {
  return (
    <LayoutAdmin>
      <Head>
        <title>Login Admin Page - Mon Portfolio</title>
        <meta name="description" content={`Ceci est la page de connexion vers le dashboard Administrateur`} />
        <meta property='og:title' content={`Login Admin Page - Mon Portfolio`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Login/>
    </LayoutAdmin>
  )
}
