import React from 'react'

export default function Collapse(need){
    

    return (
        <>
        <div className="collapse bg-base-200 w-[70%] m-auto">
            <input type="checkbox" id="collapse1" name="collapse1" className="h-[100px]" aria-label="Cliquez pour afficher" />
            <div className="collapse-title text-3xl font-medium m-auto">
                Quelles sont mes Compétences ?
            </div>
            <div className="collapse-content">
                <ul className="grid grid-cols-3 m-auto text-center pt-10 pb-10">
                    {need.need.map((element, i) => {
                        return (
                            <li key={i} className="text-3xl pb-3">- {element}</li>
                        )
                    })}
                    <li className="text-3xl">- NEXT </li>
                    <li className="text-3xl">- Firebase </li>
                </ul>
            </div>
        </div><div className="collapse bg-base-200 mt-11 w-[70%] m-auto">
                <input type="checkbox" id="collapse2" name="collapse2" className="h-[100px]" aria-label="Cliquez pour afficher" />
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
            </>
  )
 }