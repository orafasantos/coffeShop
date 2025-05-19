import { ShoppingCartIcon } from "@phosphor-icons/react";
import Product from "./Product";

export default function Main() {

    return (
      <>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>

        <ul>
          <li><ShoppingCartIcon color="var(--color-yellow-dark)" weight="fill"/><span>Compra simples e segura</span></li>
          <li><img src="" alt="" /><span>Embalagem mantém o café intacto</span></li>
          <li><img src="" alt="" /><span>Entrega rápida e rastreada</span></li>
          <li><img src="" alt="" /><span>O café chega fresquinho até você</span></li>
        </ul>
        
        <Product />

        </div>
        <aside>
          <img src="" alt="" />
        </aside>
        </>
    )
  }
  