import type { NextApiRequest, NextApiResponse } from 'next'
import { db, SHOP_CONSTANTS } from '../../../database';
import { IProduct } from '../../../interfaces';
import { Product } from '../../../models';

type Data = 
   | { message: string }
   | IProduct[]
   // la respuesta luse como un string o como un Iproduct como un arreglo


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    
    switch(req.method) {
        case 'GET':
            return getProducts( req, res );

        default: 
            return res.status(400).json({
                message: 'Bad request'
            })
    }

}

const getProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { gender = 'all' } = req.query; // extraemos e gender y le damos un valor por defecto por si no viene nada

    let condition = {};

    if ( gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`) ) {

        condition = {gender: gender};

    }

    await db.connect();
    const products = await Product.find(condition)
                                .select('title images price inStock slug -_id')
                                .lean(); // para que traiga todo con menos informacion

    await db.disconnect();

    return res.status(200).json( products )

}
