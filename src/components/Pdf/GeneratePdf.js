import jsPDF from 'jspdf'
import { useState } from 'react'

export default function GeneratePDF({ need }) {
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

        getBase64FromUrl(need[0].ImageUrl)
        function generate(){
        const doc= new jsPDF('portrait', 'px', 'a4',false)
           //Titre
        doc.setFont("times","bold")
        doc.setFontSize(42)
        const text = need[0].Titre,
        xOffset = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(text) * doc.internal.getFontSize() / 2); 
        doc.text(text, xOffset, 40);
        //Sous-Titrage
        const titleWidth = doc.getTextWidth(text);
        doc.setLineWidth(5.0);
        doc.line(xOffset, 50, xOffset+titleWidth, 50);
        //Languages + sous-titrage
        doc.setFontSize(28)
        doc.setFont("times","bold")
        doc.setTextColor("FF0000")
        doc.text(20,95,need[0].Languages)
        //Lien Github
        doc.setFontSize(12)
        doc.setTextColor("000000")
        doc.text(20, 140, need[0].UrlGithub);
        //Description
        doc.setFontSize(12)
        doc.setTextColor("000000")
        const splitTitle = doc.splitTextToSize(need[0].Description, 400);
        doc.text(20, 160, splitTitle);
        //Image
        doc.addImage(imageData64, 'PNG', 20,420, 410, 200)
        doc.save(`${need[0].Titre}.pdf`)
  }

  return (
    <div>
      <button aria-label='Telecharger le Pdf' onClick={generate} type="primary" className='btn btn-primary w-[250px] h-[100px] rounded text-2xl font-semibold'>Download PDF</button> 
    </div>
  )
}