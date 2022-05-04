import { Box, Card, CardActionArea, CardMedia, Grid, Typography, Link } from '@mui/material';
import NextLink from "next/link"
import { FC, useMemo, useState } from "react"
import { IProduct } from '../../interfaces';


interface Props {
    product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

  const [isHovered, setisHovered] = useState(false);


  // memorisamos el productImage para que no se vuelva a recalcular siempre 
  const productImage = useMemo(() => {

    return isHovered
      ? `products/${  product.images[1] }`
      : `products/${  product.images[0] }`


  }, [isHovered, product.images])
  // isHovered y product.images seran una dependencia de productImage


  return (
    <Grid 
      item 
      xs={6} 
      sm={4}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
        <Card>
            <NextLink href="/product/slug" passHref prefetch={ false }>
              <Link>
                <CardActionArea>
                    <CardMedia
                      className="fadeIn"
                      component='img'
                      image={ productImage }
                      title={ product.title }
                      // onLoad={() => console.log('cargó')} // esto se usa cuando la imagen o esa media es terminada de cargar
                    />
                </CardActionArea>
              </Link>
            </NextLink>
        </Card>

        <Box sx={{ mt: 1 }} className='fadeIn'>
          <Typography fontWeight={700}>{ product.title }</Typography>
          <Typography fontWeight={500}>${ product.price }</Typography>
        </Box>
    </Grid>
  )
}
