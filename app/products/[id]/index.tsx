import {useQuery} from "@tanstack/react-query";
import {productService} from "@/services/product.service";
import {useParams} from "next/navigation";

const Index = () => {
    const params = useParams()
    console.log(params)
    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: () => productService.getProductById(+params.id!)

    })
    return (
        <div>dsadsa</div>

    );
};

export default Index;