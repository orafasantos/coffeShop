import Logo from "../assets/logo.svg";
import Icon from "../assets/Icon.svg";
import { ShoppingCartIcon } from '@phosphor-icons/react';

export default function Header() {

    return (
      <>
        <div className="py-8 px-40 max-w-dvw max-h-[104px] flex items-center text-(--color-purple-dark) justify-between">
            
            <img src={Logo}></img>
            
            <div className="flex items-center">
              <img className="mr-1" src={Icon} alt="tracking icon"/> 
              <p className="pr-2">Porto Alegre, RS</p>
            <span className="h-[38px] w-[38px] mx-auto my-auto justify-center flex items-center bg-(--color-yellow-light) rounded-md ml-3">
              <ShoppingCartIcon color="var(--color-yellow-dark)" weight="fill"/>
              </span>
            </div>


        </div>
        

        
        </>
    )
  }
  