import { ShoppingCartSimpleIcon } from "@phosphor-icons/react";

export default function Cart() {
    return (
        <>
        
            <button className="relative box-border bg-yellow-light flex items-center justify-center px-2 py-2 w-9.5 h-9.5 rounded-md">
            <ShoppingCartSimpleIcon weight="fill" className="text-yellow-dark h-5.5 w-5.5 "/>
            <span className="absolute w-5 h-5 -inset-y-2 inset-6 right-0 bg-yellow-dark rounded-full overflow-visible"><p className="text-white font-roboto font-bold flex items-center justify-center text-xs ">3</p></span>
        </button>
        




        </>
    )
}
