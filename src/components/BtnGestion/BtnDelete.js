import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from 'react'
import { useContext } from "react";
import { collection,doc, getDocs, getDoc, where, query, deleteDoc } from 'firebase/firestore'
import { db,storage } from '../../../firebase'
import { deleteObject,ref } from "firebase/storage";


export default function BtnDelete({need}) {
    const router = useRouter()
  
    console.log(need[0].ImageName)

    const deleteDocument = () => {
        let fieldToEdit = doc(db, "Travaux", need[0].Titre);
        deleteDoc(fieldToEdit)
        .then(() => {
          console.log('Data Deleted')
        })
        const desertRef = ref(storage, `image/${need[0].ImageName}`);
        deleteObject(desertRef).then(() => {
        }).catch((error) => {
        });
      }

  return (
    <div>
     <button aria-label="Suppression du projet" className="btn btn-error md:mt-0 w-[200px] h-[60px] rounded text-2xl font-semibold" onClick={() => {router.push("/Admin/admin");deleteDocument(need)}}>Delete</button>
    </div>
  )
}
