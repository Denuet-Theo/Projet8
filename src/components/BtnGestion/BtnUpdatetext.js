import { useRouter } from "next/router";
import React from 'react'
import Modal from '../Modal';
import { useEffect, useState,useContext } from 'react'
import { db,storage } from '../../../firebase';
import {collection,addDoc,getDocs,doc,updateDoc,deleteDoc} from 'firebase/firestore';



export default function BtnUpdatetext({need}) {
  const router = useRouter()
    const [ID, setID] = useState(null);
    const [showModal, setShowModal] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false);
    const [Titre, setTitre] = useState("");
    const [Description, setDescription] = useState("");
    const [Languages, setLanguages] = useState("");
    const [Competences, setCompetences] = useState("");
    const [UrlGithub, setUrlGithub] = useState("");
  
    const updateFields = () => {
        let fieldToEdit = doc(db, "Travaux", need[0].Titre);
        updateDoc(fieldToEdit, {
          Titre: Titre,
          Languages: Languages,
          Description:Description,
          Competences: Competences,
          UrlGithub: UrlGithub,
        })
        .then(() => {
          alert('Data Updated')
          setTitre('')
          setLanguages('')
          setDescription('')
          setCompetences('')
          setUrlGithub('')
          setIsUpdate(false)
          router.push('/Admin/admin')
        })
        .catch((err) => {
          console.log(err);
        })
      }
    
      const getID = (id, Titre, Languages,Description,Competences,UrlGithub) => {
          setID(id)
          setTitre(Titre)
          setDescription(Description)
          setLanguages(Languages)
          setCompetences(Competences)
          setUrlGithub(UrlGithub)
          setIsUpdate(true)
          
      }


  return (
    <div>
      <button aria-label="Ouvrir la Modale" className='btn-warning text-2xl w-[200px] h-[60px] rounded m-auto font-semibold  ' onClick={() => {getID(need.affiliationId, need[0].Titre, need[0].Languages,need[0].Description,need[0].Competences,need[0].UrlGithub);setShowModal(true)}}>UPDATE</button>
      <Modal isvisible={showModal} onClose={() => setShowModal(false)}>
    <section className='flex flex-col m-auto mt-0'>
      <div className="flex flex-row-reverse items-end mr-2 mt-1">
    <button aria-label="Fermer la Modale" className="text-black text-xl items-center" onClick={() => {setShowModal(false)}}> X </button>
    <h2 className='m-auto text-center text-2xl text-violet-700'>Modifier un document</h2>
      </div>
      <label className='text-violet-700 mt-3 mb-2 m-auto' htmlFor="Titre">Titre :</label>
    <input placeholder='Titre' id="Titre" name="Titre" className="outline-none mt-3 p-3 mb-3 text-base  text-violet-700 flex-1 bg-violet-50 hover:bg-violet-100 rounded-full" type="text" value={Titre} onChange={event => setTitre(event.target.value)}/>
      <label className='text-violet-700 mt-3 mb-2 m-auto' htmlFor="UrlGithub">Url Github :</label>
    <input placeholder='Url Github' name="UrlGithub" id="UrlGithub" className="outline-none mt-3 p-3 mb-3 text-base  text-violet-700 flex-1 bg-violet-50 hover:bg-violet-100 rounded-full" type="text" value={UrlGithub} onChange={event => setUrlGithub(event.target.value)}/>
    <label className='text-violet-700 mt-3 mb-2 m-auto' htmlFor="Languages">Languages :</label>
    <input placeholder='Languages' id="Languages" name="Languages" className="outline-none mt-3 p-3 mb-3 text-base  text-violet-700 flex-1 bg-violet-50 hover:bg-violet-100 rounded-full" type="text" value={Languages} onChange={event => setLanguages(event.target.value)}/>
    <label className='text-violet-700 mt-3 mb-2 m-auto' htmlFor="Competences">Competences :</label>
    <input placeholder='Competences' id="Competences" name="Competences" className="outline-none mt-3 p-3 mb-3 text-base  text-violet-700 flex-1 bg-violet-50 hover:bg-violet-100 rounded-full" type="text" value={Competences} onChange={event => setCompetences(event.target.value)}/>
    <label className='text-violet-700 mt-3 mb-2 m-auto' htmlFor="Description">Entrer une nouvelle description :</label>
    <textarea id="Description" titre="description" name="Description" rows="6" cols="40" placeholder="Entrer la description" value={Description} onChange={event => setDescription(event.target.value)} className="outline-none p-3 mb-3 mt-3 text-base  text-violet-700  bg-violet-50 hover:bg-violet-100 flex-1"></textarea>
    <button aria-label="Modifier le projet" className="mt-[10px] mb-[10px] w-fit px-4  py-2 m-auto bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40" onClick={updateFields}> UPDATE </button>
                                                                                                                                                                                                
    </section>
    </Modal>
    </div>
  )
}
