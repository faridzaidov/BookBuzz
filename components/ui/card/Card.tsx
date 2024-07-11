import {FC} from "react";
import Image from "next/image";
import './style.scss'
import Link from "next/link";
interface ICardProps {
    id: string;
    title: string;
    subtitleShort: string;
    numOfLikes: number;
    price: number;
    mainImage: string;

}

const Card: FC<ICardProps> = ({
                                  mainImage, price, numOfLikes, subtitleShort, id, title,
                              }) => {
    return (
        <Link href={`products/${id}`}>
            <div className="card_container">
                <div className="card_more">...</div>
                <Image src={mainImage} alt={title || ' '} width={250} height={270} />
                <p className={"card_name"}> {title}</p>
                <p className={"card_desc"}>{subtitleShort}</p>
                <div className={"card_favourite"}>
                    <div>likes</div>
                    <p>{numOfLikes}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;