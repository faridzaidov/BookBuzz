export interface Product {
    id: string;
    title: string;
    subtitleShort: string;
    numOfLikes: number;
    price: number;
    mainImage: string;
}

export interface Result {
    products: Product[];
}


export interface IProductResponse {
    isError: boolean;
    errorMessage: string | null;
    result: Result | null;
}

export interface IProductByIdResponse {
    isError: boolean;
    errorMessage: string | null;
    result: Product | null;
}