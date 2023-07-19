import React from 'react'

export default function Collapse(need){
    const settext = new Set(need.need)
    const textunique = [...settext]
    console.log(textunique)
    
    

    return (
        <>
        <div className="collapse bg-base-200 w-[70%] m-auto">
            <input type="checkbox" id="collapse1" name="collapse1" className="h-[100px]" aria-label="Cliquez pour afficher" />
            <div className="collapse-title text-2xl sm:text-3xl font-medium m-auto text-center pl-0 pr-0">
                Quelles sont mes compétences ?
            </div>
            <div className="collapse-content">
                <ul className="sm:grid sm:grid-cols-3 m-auto sm:text-center pt-10 pb-10 flex flex-col">
                {textunique.map((element, i) => {
                    return (
                        <li key={i} className="sm:text-2xl text-xl md:text-3xl pb-3">- {element}</li>
                    )
                })} 
                    <li className="sm:text-2xl text-xl md:text-3xl">- NEXT </li>
                    <li className="sm:text-2xl text-xl md:text-3xl">- Firebase </li>
                </ul>
            </div>
        </div><div className="collapse bg-base-200 mt-11 w-[70%] m-auto">
                <input type="checkbox" id="collapse2" name="collapse2" className="h-[100px]" aria-label="Cliquez pour afficher" />
                <div className="collapse-title text-2xl sm:text-3xl font-medium m-auto text-center pl-0 pr-0">
                    Quelles sont mes ambitions professionnelles ?
                </div>
                <div className="collapse-content leading-[42px]">
                    <p className="m-auto sm:text-2xl text-xl md:text-3xl pt-10 pb-10">Etant encore un jeune developpeur, je cherche avant tout à continuer mon apprentissage, continuer à m'améliorer dans les domaines
                        que j'affectionne comme par exemple le javascript et plus particulièrement encore React et Next. <br></br> <br></br> Cependant, ayant récemment commencé le backend avec mongoDb
                        et encore plus récemment Firebase j'aimerai être capable de lier tout cela.
                        C'est donc dans cette optique que je recherche une formation en alternance spécialisée en React ou bien Next afin d'approfondir mes connaissances ou alors un poste du même type me permettant de
                        bonnes conditions d'apprentissage et d'amélioration.
                    </p>
                </div>
            </div>
            </>
  )
 }