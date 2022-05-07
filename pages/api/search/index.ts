import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { message: string }
   // la respuesta luse como un string o como un Iproduct como un arreglo


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    
    switch(req.method) {
        case 'GET':
            return res.status(400).json({
                message: 'Debe de especificar el query de busqueda'
            })

        default: 
            return res.status(400).json({
                message: 'Bad request'
            })
    }

}

