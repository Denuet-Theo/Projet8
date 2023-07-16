import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Image from "next/image";

function Slider({datas}) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? datas[0].images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === datas[0].images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    return (
      <section className="flex flex-col">
        <h1 className="m-auto text-4xl mt-10">Portfolio Etudiant OpenClassrooms</h1>
        <div className=' w-full h-[500px] m-auto py-16 px-4 relative group mt-20 mb-20'>
          <div className='w-full rounded-2xl bg-center bg-cover duration-500 h-[382px] relative'>
            <Image src={`${datas[0].images[currentIndex].url}`} alt="Image ordinateur" title={`Image du carrousel`} priority={true} fill={true} className="h-[382px] object-cover w-full rounded-2xl bg-center bg-cover duration-500"/>
          </div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
             <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </section>
    );
  }
export default Slider; 