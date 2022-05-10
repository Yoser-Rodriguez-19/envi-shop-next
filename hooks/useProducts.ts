import useSWR, { SWRConfiguration } from 'swr'
import { IProduct } from '../interfaces/products';




// const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json())


export const useProducts = (url: string, config: SWRConfiguration = {}) => { // para hacer el config opcional lo igualamos a un objeto vacio
    
    
    // const { data, error } = useSWR<IProduct[]>(`/api/${ url }`, fetcher, config)
    const { data, error } = useSWR<IProduct[]>(`/api/${ url }`, config)

    return {
        products: data || [],
        isLoading: !error && !data,
        isError: error
    }

}