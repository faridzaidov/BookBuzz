import {axiosWithAuth} from '@/api/interceptors'
import {IProductByIdResponse, IProductResponse} from "@/types/product.types";

class ProductService {
    private BASE_URL = '/product/explore'
    private SEARCH_URL = '/product/search'
    private DETAILS_URL = '/product/details'


    async getProducts() {
        return await axiosWithAuth.get(this.BASE_URL)
    }

    async getProductById(id: number) {
        return await axiosWithAuth.get(this.DETAILS_URL + `?productId=${id}`)
    }

    async getProductsBySearch(search: string) {
        return await axiosWithAuth.get(this.SEARCH_URL + `?q=${search}`)
    }


}

export const productService = new ProductService()
