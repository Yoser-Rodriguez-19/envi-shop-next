import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import { ShopLayout } from '../../components/layouts';
// import { initialData } from '../database/products';
import { ProductList } from '../../components/products/ProductList';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';



const KidPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=kid');

  return (
    <ShopLayout
      title={'shop-kid'}
      pageDescription={'Compra articulos de niños'}
    >
      <Typography variant='h1' component='h1'>Niños</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos para niños</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products}/>
      
      }



    </ShopLayout>
  )
}

export default KidPage
