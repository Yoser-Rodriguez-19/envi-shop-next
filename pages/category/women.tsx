import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import { useState } from 'react';
import { ShopLayout } from '../../components/layouts';
// import { initialData } from '../database/products';
import { ProductList } from '../../components/products/ProductList';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';



const WomenPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=women');

  

  return (
    <ShopLayout
      title={'shop-woman'}
      pageDescription={'Compra articulos de mujeres'}
    >
      <Typography variant='h1' component='h1'>Mujeres</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos para mujeres</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={products}/>
      
      }



    </ShopLayout>
  )
}

export default WomenPage