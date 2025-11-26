import { useState } from 'react'

import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import bgimg_section from './assets/image/img_header/fundo_header.png'


import casa1 from './assets/image/img_header/slid_1.png'
import casa2 from './assets/image/img_header/slid_2.png'
import casa3 from './assets/image/img_header/slid_3.png'
import casa4 from './assets/image/img_header/slid_4.png'
import bg_img from './assets/image/img_header/texto_transparent.png'




import 'swiper/css';

function App() {

  return (
   <div id='main' className='grid grid-cols-1 grid-rows-[50px_1fr_200px] min-h-screen relative @7xl:w-7xl @7xl:my-auto '>
     
      <Header/>

        <main className='mb-5 row-start-2 row-end-3 grid-cols-1 grid-rows-[500px_1fr_1fr] '>
          <section className="gap-5 bg-cover bg-center w-full h-[500px] text-center flex flex-col flex-nowrap justify-center" style={{ backgroundImage: `url(${bgimg_section})`}}>
            <div className='text-white font-bold text-[3em] *:text-nowrap max-sm:text-[2em]'>
               <p>VAMOS ENCOTRAR O TEU </p>
                <p>KUBICO DOS SONHOS!</p>
               </div>

            <a href="#" className='text-white font-bold bg-amber-400 w-[200px]  self-center p-0.5 rounded-4xl hover:bg-amber-300 animate-minha'>A tua casa em um click</a>
            

          </section>



          <section className=" p-2.5 max-sm:mb-7">

            <h2 className='bg-amber-400 w-20 my-4 p-1 rounded-[5px]' >Destaque</h2>

            <div id="sub_section2 " className='flex *:basis-[30%] justify-evenly sm:*:h-[300px] *:h-[200px] gap-3.5 *:[&_img]:h-[60%] *:[&_img]:w-full *:[&_img]:bg-black'>
              
              <div className=''>
                <img src={casa1} alt="" />
                <div id="inf" className='px-2'>
                  <p>Casa com dois quartos</p>
                  <p><strong>Arrendamento:</strong> 35.000kz</p>
                </div>
              </div>

              <div>
                <img src={casa2} alt="" />
                 <div id="inf" className='px-2'>
                  <p>Casa com dois quartos</p>
                  <p><strong>Arrendamento:</strong> 50.000kz</p>
                </div>
              </div>

              <div>
                <img src={casa3} alt="" />
                 <div id="inf" className='px-2'>
                  <p>Casa com dois quartos</p>
                  <p><strong>Alugel:</strong> 20.000kz/dia</p>
                </div>
              </div>

              <div className=''>
                <img src={casa4} alt="" />
                 <div id="inf" className='px-2'>
                  <p>Casa com dois quartos</p>
                  <p><strong>Venda:</strong> 90.000.000kz</p>
                </div>
              </div>
            </div>
           

          </section>

          <section className="p-3.5 h-[500px] bg-cover bg-left relative" style={{ backgroundImage: `url(${bg_img})` }}>


            <div id="text_section3" className='flex flex-col absolute w-[300px] h-[80%] top-20  right-[10%] bg-white/40 py-3.5 text-center gap-5 rounded-4xl max-sm:w-[55%] max-sm:h-[70%] justify-center'>

              <p className='text-[1.5rem]'>
                Se está a procura de um cubico para arrendar, este artigo é para si. Antes de assinar contrato deve ter alguns cuidados.
              </p>

              <button type="button" className='font-bold bg-amber-400 w-[200px]  self-center p-0.5 rounded-lg hover:bg-amber-300'>
                Fale conossco
              </button>
            </div>

          </section>
        </main>

        <Footer/>
     
   </div>
  )
}

export default App
