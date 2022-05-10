import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts';
// import { initialData } from '../database/products';
import { ProductList } from '../components/products/ProductList';
import { FullScreenLoading } from '../components/ui';
import { useProducts } from '../hooks';



const HomePage: NextPage = () => {

  const { products, isLoading } = useProducts('/products');

  return (
    <ShopLayout
      title={'enviExpress-shop'}
      pageDescription={'Compra en Colombia y envía a Venezuela'}
    >
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products}/>
      
      }



    </ShopLayout>
  )
}

export default HomePage
