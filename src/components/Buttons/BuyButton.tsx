import { ShoppingCartSimpleIcon } from "@phosphor-icons/react/dist/ssr";

export default function BuyButton() {
    return (
        <>

        <button className="bg-purple-dark flex items-center justify-center px-2 py-2 hover:bg-purple-normal w-9.5 h-9.5 rounded-md">
            <ShoppingCartSimpleIcon weight="fill" className="text-base-card h-5.5 w-5.5 "/>
        </button>


        </>
    )
};