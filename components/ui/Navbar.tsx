import NextLink from 'next/link';
import { useContext } from 'react';

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { UiContext } from '../../context';


export const Navbar = () => {

   const {route} = useRouter(); 

   const { toggleSideMenu } = useContext( UiContext )

  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/' passHref>
                <Link display='flex' alignItems='center'>
                    <Typography variant='h6'>enviExpress</Typography>
                    <Typography sx={ { ml: 0.5 } } >Shop</Typography>
                </Link>
            </NextLink>

            <Box flex={ 1 } />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <NextLink href='/category/men' passHref>
                    <Link>
                        <Button color={route === '/category/men' ? 'primary' : 'info'}>
                            Hombres
                        </Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/women' passHref>
                    <Link>
                        <Button color={route === '/category/women' ? 'primary' : 'info'}>
                            Mujeres
                        </Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/kid' passHref>
                    <Link>
                        <Button color={route === '/category/kid' ? 'primary' : 'info'}>
                            Niños
                        </Button>
                    </Link>
                </NextLink>
            </Box>

            <Box flex={ 1 } />

            <IconButton>
                <SearchOutlined />
            </IconButton>

            <NextLink href='/cart' passHref>
                <Link>
                    <IconButton>
                        <Badge badgeContent={ 2 } color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>
            </NextLink>

            <Button onClick={ toggleSideMenu } >
                Menu
            </Button>

        </Toolbar>
    </AppBar>
  )
}
