import React,{ useEffect, useState,useContext,useRef } from 'react'
import { db,storage } from '../../../firebase';
import {collection,addDoc,getDocs,doc,updateDoc,deleteDoc, setDoc} from 'firebase/firestore';
import { getDownloadURL, uploadBytesResumable,ref,deleteObject } from 'firebase/storage';
import Head from 'next/head';
import AuthRoute from '../../HOC/AuthRoute';
import LayoutAdmin from '../..//components/Admin/LayoutAdmin';

export default function creatework() {
  const reff = React.useRef();
  const [progressUpload,setProgressUpload] = useState()
  const [formData, setFormData] = useState({
    Titre:"",
    Languages:"",
    Description:"",
    Images:"",
    Competences:"",
    UrlGithub:"",
  })

  const handleChange = (event) => {
    const {type,name,value} = event.target
    setFormData(prev => {
      return{
        ...prev,
        [name]:value
      }
    })
  }

  const handleSelectedFile = (files) => {
    if (files && files[0].size < 10000000) {
      setFormData({
        Titre:formData.Titre,
        Languages:formData.Languages,
        Description:formData.Description,
        Images:files[0],
      Competences:formData.Competences,
      UrlGithub:formData.UrlGithub})
      } else {
        message.error('File size to large')
      }
    }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if(formData.Images && formData.Titre && formData.Description && formData.Competences && formData.Languages && formData.UrlGithub) {
      const name=formData.Images.name
      const storageRef = ref(storage, `image/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, formData.Images)
      uploadTask.on('state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgressUpload(progress) // to show progress upload
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
        }
      },
        (error)=> {
          console.log("error.message")
        },
        ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then((url) =>{
            const databaseRef = doc(db, 'Travaux', formData.Titre)
            setDoc(databaseRef, {
              Titre: formData.Titre,
              Description: formData.Description,
              Languages: formData.Languages,
              ImageUrl : url,
              UrlGithub : formData.UrlGithub,
              ImageName: name,
              Competences: formData.Competences})
              .then(() => {
                alert('Data Sent')
                setFormData({
                  Titre:"",
                  Languages:"",
                  Description:"",
                  Images:"",
                  Competences:"",
                  UrlGithub:"",
                })
                reff.current.value =''
            })
          })
        }
      )}
      else{
        alert("Formulaire incomplet")
      }}
 
  return (
      <LayoutAdmin>
        <AuthRoute>
          <Head>
            <title>Ajouter - Mon Portfolio</title>
            <meta name="description" content="Ceci est la page pour créer ou plûtot ajouter un nouveau projet a mon portfolio"/>
            <meta property='og:title' content='Ajouter - Mon Portfolio'/> 
            <link rel='icon' href='/favicon.ico'/>
          </Head>
            <section className='m-auto items-center mt-12 flex flex-col w-[100%]'>
              <h1 className='m-auto text-center text-4xl underline text-white font-bold mb-[50px]'>Ajouter un nouveau document</h1>
              <form onSubmit={handleSubmit} className='flex flex-col m-auto w-[70%]'>
                <label htmlFor='Titre' className='m-auto text-2xl mb-[25px] font-bold'>Titre :</label>          
                <input type='text' name='Titre' id='Titre' value={formData.Titre} onChange={handleChange} placeholder="Titre du document" className="outline-none p-3 mb-3 text-base  text-violet-700  bg-violet-50 hover:bg-violet-100 rounded-full" />
                <label htmlFor='UrlGithub' className='m-auto text-2xl mb-[25px] font-bold'>Url Github :</label>          
                <input type='text' name='UrlGithub' id='UrlGithub' value={formData.UrlGithub} onChange={handleChange} placeholder="Url Github" className="outline-none p-3 mb-3 text-base  text-violet-700  bg-violet-50 hover:bg-violet-100 rounded-full" />
                <label htmlFor='Languages' className='m-auto text-2xl mb-[25px] font-bold mt-4'>Langages :</label>          
                <input type='text' name='Languages' id='Languages' value={formData.Languages} onChange={handleChange} placeholder="Langages utilisés" className="outline-none p-3 mb-3 text-base  text-violet-700  bg-violet-50 hover:bg-violet-100 rounded-full" /> 
                <label htmlFor='Competences' className='m-auto text-2xl mb-[25px] font-bold mt-4'>Compétences :</label>          
                <input type='text' name='Competences' id='Competences' value={formData.Competences} onChange={handleChange} placeholder="Compétences" className="outline-none p-3 mb-3 text-base  text-violet-700  bg-violet-50 hover:bg-violet-100 rounded-full" />    
                <label className='m-auto text-2xl mb-[25px] font-bold mt-4' htmlFor="Description">Entrer une description :</label>
                <textarea id="Description" name="Description" value={formData.Description} onChange={handleChange} placeholder="Entrer la description" className="h-[250px] outline-none p-3 mb-3 text-base  text-violet-700  bg-violet-50 hover:bg-violet-100"></textarea>
                <label className='m-auto text-2xl mb-[25px] font-bold mt-4' htmlFor='Images'>Images :</label>
                <input type="file" name='Images' id='Images' ref={reff} onChange={(files) => handleSelectedFile(files.target.files)} placeholder="Select file to upload" accept="image/png image/webp" className=' m-auto mb-3 p-3 block text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold  file:bg-violet-50 file:text-black hover:file:bg-violet-100'/>
                <button aria-label='Valider le nouveau projet' type='submit' className='text-black mt-[25px] mb-[30px] w-fit px-4  py-2  bg-amber-400 font-medium text-2xl m-auto duration-300 hover:opacity-40 rounded-full'>Valider mon nouveau projet</button>
              </form>
            </section>
        </AuthRoute>
      </LayoutAdmin>
  
    
  )
}
