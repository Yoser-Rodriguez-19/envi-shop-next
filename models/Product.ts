import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '../interfaces';


const productSchema = new Schema({

    description: { type: String, required: true },
    images: [{ type: String }], // es un arreglo de imagenes
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [{ 
        type: String,
        enum: {
            values: ['XS','S','M','L','XL','XXL','XXXL'],
            message: '{VALUE} no es un tamaño permitido'
        }
    }],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
        type: String,
        enum: {
            values: ['shirts','pants','hoodies','hats'],
            message: '{VALUE} no es un tipo válido'
        }
    },
    gender: {
        type: String,
        enum: {
            values: ['men','women','kid','unisex'],
            message: '{VALUE} no es genero válido'
        }
    },


},{

    // esto es para manejar la fecha de creacion y fecha de actualizacion
    // esto mongoose me crea esas fechas de creacion y actualizacion de manera automatica
    timestamps: true

})

//TODO: crear indice de Mongo
productSchema.index({ title: 'text', tags: 'text' })


// creamos el modelo de tipo Iproduct que sera igual a el producto con el modelo que estoy definiendo, si ya existe usa ese, si no nos creamos un nuevo modelo que se llame product y apunte al product schema
const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema);


export default Product;