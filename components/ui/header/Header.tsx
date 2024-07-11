import React from 'react';
import './style.scss'
import {useRouter} from "next/navigation";
import {getAccessToken} from "@/services/auth-token.service";
import {useProducts} from "@/hooks/useProducts";
import Link from "next/link";

const Header = () => {
    const [search, setSearch] = React.useState('')
    const route = useRouter()
    const token = getAccessToken()
    useProducts(search)

    const handleBasket = () => {
        if (token) {
            route.push('/basket')
        } else {
            route.push('/login')
        }

    }



    return (
        <div className='header'>
                <div className='search_container'>
                    <input type={"text"} name='q' onChange={event => setSearch(event.target.value)} className='search_input' placeholder="Search Book"/>
                </div>

            <div className='header_button'>
                <button onClick={handleBasket} className='btn_cart'>Cart</button>
                <Link href='/auth'>
                    <button className='btn_login'>Login</button>
                </Link>
            </div>

        </div>
    );
};

export default Header;