import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import {productService} from "@/services/product.service";

export function useProducts(search?: string) {
    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: () => productService.getProducts(),
        enabled: !search

    })
    const { searchedData } = useQuery({
        queryKey: ['products'],
        queryFn: () => productService.getProductsBySearch(search || ''),
        enabled: !!search
    })

    const [items, setItems] = useState<[] | undefined>(data?.data)

    useEffect(() => {
        setItems(searchedData?.data.result.products ||data?.data.result.products)
    }, [data?.data || searchedData?.data])

    return { items, setItems }
}
