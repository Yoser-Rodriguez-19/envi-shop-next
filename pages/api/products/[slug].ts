import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { IProduct } from '../../../interfaces/products';
import { Product } from '../../../models';

type Data = 
 | { message: string }
 | IProduct // tambien podria regresar un producto

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {


    
    switch(req.method) {
        case 'GET':
            return getProductBySlug( req, res );

        default: 
            return res.status(400).json({
                message: 'Bad request'
            })
    }

}

const getProductBySlug = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    
    await db.connect();
    const { slug } = req.query; 


    const product = await Product.findOne({ slug }).lean(); // para que traiga todo con menos informacion

    await db.disconnect();


    if ( !product ) { 
        return res.status(400).json({
            message: 'Producto no encontrado'
        })
    }

    return res.status(200).json( product )

}