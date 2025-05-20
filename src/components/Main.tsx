import { CoffeeIcon, PackageIcon, ShoppingCartIcon, Timer } from "@phosphor-icons/react";






export default function Main() {

    return (
      <>
      <div className="mx-40 inline-block">
        <div className="">
          <h1 className="font-baloo max-w-[588px] font-extrabold text-5xl text-base-title mt-23.5 mb-4 pb-4">Encontre o café perfeito para qualquer hora do dia</h1>
          
        </div>
          <p className="font-roboto max-w-[588px] text-base-subtitle font-normal text-xl">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        
        <ul className="max-h-[84px] w-[567px] flex gap-10 mb-27">
          <section>
          <li className="flex items-center">
            <div className="w-8 bg-yellow-dark rounded-full h-8 justify-center flex items-center">
              <ShoppingCartIcon color="var(--color-background)" weight="fill"/>
              </div>
            <span>Compra simples e segura</span>
            </li>
          <li className="flex items-center mt-5">
            <div className="w-8 h-8 justify-center flex items-center rounded-full bg-yellow-normal">
            <Timer color="var(--color-background)" weight="fill"/>
            </div>
            <span>Entrega rápida e rastreada

            </span>
          </li>
          </section>
          <section>
            <li className="flex items-center gap-2 font-roboto text-base-text">
            <div className="w-8 h-8 bg-base-text rounded-full justify-center flex items-center">
              <PackageIcon color="var(--color-background)" weight="fill"/>
              </div>
               <span>Embalagem mantém o café intacto</span>
               </li>

            <li className="flex items-center gap-2 mt-5 ">
            <div className="w-8 h-8 justify-center bg-purple-normal rounded-full flex items-center">
              <CoffeeIcon color="var(--color-background)" weight="fill"/>
              </div>
              <span className="font-roboto leading-[130%] text-base-text">O café chega fresquinho até você</span>
              </li>
              
          </section>
          
        </ul>

        {/* <img src="/Imagem.png" alt="Um copo de café com grãos em gradiente" className="w-[476px] mt-24 ml-14 h-[360px]"/> */}
        {/* <img src="/Imagem.png" alt="Um copo de café com grãos em gradiente" className="w-[476px] mt-24 ml-14 h-[360px]"/> */}
        {/* <img src="/Imagem.png" alt="Um copo de café com grãos em gradiente" className="w-[476px] mt-24 ml-14 h-[360px]"/> */}
        
          
       
        </div>
        
       
          
        
        </>
    )
  }
  