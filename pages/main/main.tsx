
"use client"
import Card from "@/components/ui/card/Card";
import {useProducts} from "@/hooks/useProducts";
import './style.scss'
import Header from "@/components/ui/header/Header";

const Main = () => {
    const { items, setItems } = useProducts()
    return (
        <>
            <Header/>
            <h1>Cards</h1>
            <div className='cards'>
                {items?.map((item, i) => (
                    <Card {...item}/>))}
            </div>
        </>

    )
}

export default Main
