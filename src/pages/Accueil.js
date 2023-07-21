import Head from 'next/head'
import {data} from "../../data"
import Slider from '../components/Slider'
import Layout from '../components/Layout'
import dynamic from 'next/dynamic'

const Intro = dynamic(() => import('../components/Intro'))

export default function Accueil({datas}) {
  return (
      <Layout>
        <Head>
          <title>Accueil - Mon Portfolio</title>
          <meta name="description" content="Ce site est le portofolio que j'ai crée en utilisant toutes mes connaissances"/>
          <meta property='og:title' content='Accueil - Mon Portfolio'/> 
          <link rel='icon' href='/favicon.ico'/>
        </Head>
        <Slider datas={datas}/>
        <Intro datas={datas}/>
      </Layout>
  )
}



export async function getServerSideProps(){
  const datas = data;
  
  return {
    props: { datas },
  };
}
