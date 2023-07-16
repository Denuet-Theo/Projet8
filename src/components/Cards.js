import React from 'react'

export default function Cards(props){
    const {children} = props

    return (
      <div className="card card-compact w-full h-[400px] bg-base-100 shadow-xl mt-8" aria-roledescription='Card/Lien répertoriant chaque projet'>
        <div className="card-body">
          { children}
        </div>
      </div>
  )
 }



