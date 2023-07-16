function Intro({datas}) {
  return (
      <section aria-roledescription="Explication sur la réalisation de ce portfolio" className='mb-20'>
        <h2 className="m-auto mb-8 font-bold text-3xl flex justify-center">Comment est réalisé ce portfolio ? </h2>
        <div className="flex flex-col mt-20 ml-4 justify-center mr-4">
          <div className="w-full p-5 bg-slate-800 rounded m-auto mb-32 text-center">
            <h3 className="mb-8 w-[100%] text-2xl">{datas[1].Intro[0].partie1}</h3>
            <div className="w-[100%]">
              <p className="text-xl">{datas[1].Intro[1].partie2}</p>
              <p className="mt-8 text-xl">{datas[1].Intro[2].partie3}</p>
              <p className="mt-8 text-xl">{datas[1].Intro[3].partie4}</p>
            </div>
          </div>
          <h2 className='m-auto mb-8 font-bold text-3xl flex justify-center'>Avec quelles technologies ?</h2>
          <article className="m-auto p-5 items-center gap-12 lg:mb-0 flex flex-col w-[100%] lg:w-[90%] lg:mt-0 text-center bg-slate-800 rounded">
           <div className='text-xl'>
           <span className='text-3xl'>{datas[1].Intro[4].name}</span><br></br>
           {datas[1].Intro[4].text}
            </div>
           <div className='text-xl'>
           <span className='text-3xl'>{datas[1].Intro[5].name}</span> <br></br>
           {datas[1].Intro[5].text}
            </div>
           <div className='text-xl'>
           <span className='text-3xl'>{datas[1].Intro[6].name}</span> <br></br>
           {datas[1].Intro[6].text}
           </div>
           <div className='text-xl'>
           <span className='text-3xl'>{datas[1].Intro[7].name}</span> <br></br>
           {datas[1].Intro[7].text}
           </div>
          </article>
        </div>
      </section>
  );
}

export default Intro;