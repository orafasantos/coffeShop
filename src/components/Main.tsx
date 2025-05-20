import { ShoppingCartIcon, Timer } from "@phosphor-icons/react";
import Product from "./Product";
import DefaultButton from "./Buttons/DefaultButton";
import RemoveItem from "./Buttons/RemoveItem";
import BuyButton from "./Buttons/BuyButton";
import Cart from "./cart";
import CreditButton from "./Buttons/CreditButton";

export default function Main() {

    return (
      <>
      <div className="mx-40 ">
        <div className="flex flex-col">
          <h1 className="font-baloo font-extrabold text-5xl text-base-title mt-23.5 mb-4 pb-4">Encontre o café perfeito para qualquer hora do dia</h1>
          <p className="font-roboto text-base-subtitle font-normal text-xl">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>
        <BuyButton/>
        <ul>
          <li><ShoppingCartIcon color="var(--color-yellow-dark)" weight="fill"/><span>Compra simples e segura</span></li>
          <li><span>Entrega rápida e rastreada</span></li>
          <li><img src="" alt="" /><span>Embalagem mantém o café intacto</span></li>
          <li><img src="" alt="" /><span>O café chega fresquinho até você</span></li>
        </ul>

        <DefaultButton></DefaultButton>
        <RemoveItem></RemoveItem>
        <Product />

        
        

        </div>
        <CreditButton/>
        <aside>
          <img src="" alt="" />
        </aside>
        </>
    )
  }
  