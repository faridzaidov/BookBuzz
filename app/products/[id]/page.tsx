'use client'
import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {productService} from "@/services/product.service";
import Header from "@/components/ui/header/Header";
import "./style.scss"
import Image from "next/image";
import {useState} from "react";

const Page = () => {
    const [count,setCount] = useState(1)
    const params = useParams()
    const {data} = useQuery({
        queryKey: ['productById'],
        queryFn: () => productService.getProductById(+params.id!)

    })

    const increase = () => {
        setCount(count => count + 1);
        console.log("4545444")
    };

    //decrease counter
    const decrease = () => {
        setCount(count => count - 1);
        console.log("sasasaasas")
    };

    return (
        <>
            <Header/>
            <div className="product_container">
                <Image src={data?.data.result.mainImage || ""} width={500} height={400}
                       alt={data?.data.result.subtitleShort || " "}/>
                <div className="product_desc">
                    <h3>{data?.data.result.title}</h3>
                    <p>{data?.data.result.subtitleShort}</p>
                    <div className="product_tag">
                        <span>tag1</span>
                        <span>tag2</span>
                        <span>tag3</span>
                    </div>
                    <div className="counter">
                        <span className="counter__output">{count * data?.data.result.price}</span>
                        <div className="btn__container">
                            <button className="control__btn" onClick={decrease}>-</button>
                            <span>{count}</span>
                            <button className="control__btn" onClick={increase}>+</button>

                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Page;