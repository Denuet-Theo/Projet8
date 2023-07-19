import jsPDF from 'jspdf'
import { useState } from 'react'

export default function GeneratePDF() {
    const [imageData64, setImageData64] = useState()
   
    const getBase64FromUrl = async (url) => {
        const data = await fetch(url);
        const blob = await data.blob();
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob); 
          reader.onloadend = () => {
            const base64data = reader.result;   
            //resolve(base64data);
            setImageData64(base64data)
          }
        });
      }
      getBase64FromUrl("https://cdn-images.zety.fr/pages/modeles_cv_word_gratuits_modernes_10.png").then(console.log)
      
        function generate(){
        const doc= new jsPDF('portrait', 'px', 'a4',false)
        //Image
        doc.addImage(imageData64, 'PNG',0,0,460,630)
        doc.save("Cv.pdf")
     
  }

  return (
    <>
      <button aria-label='Telecharger le Cv en PDF' onClick={generate} type="primary" className='text-2xl btn btn-primary h-24 rounded w-[350px] mt-[250px] mb-[100px] m-auto'>Télécharger CV fictif</button> 
    </>
  )
}