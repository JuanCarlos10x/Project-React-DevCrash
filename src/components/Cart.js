import { collection, increment, serverTimestamp, updateDoc } from 'firebase/firestore';
import React from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { doc, setDoc } from "firebase/firestore"
import { db } from '../utils/firebaseConfiguracion'

const Cart = () => {

    const { cartList, clear, removeItem, totalProductos, total } = useContext(CartContext)

    const createOrder = () => {

        let order = {
            buyer: {
                name: 'Juan Carlos Sanchez',
                email: 'carlos12@gmail.com',
                phone: '5511245193'
            },
            date: serverTimestamp(),
            items: cartList.map(item => ({
                id: item.id,
                title: item.nombre,
                price: item.price,
                qty: item.qty
            })),
            total: total()
        }

        const createOrderDb = async () => {
            const newOrder = doc(collection(db, 'orders'))
            await setDoc(newOrder, order);
            return newOrder
        }

        createOrderDb()
            .then(response => {
                alert('Se creo la orden de compra en la db con el ID =', response.id)

                cartList.forEach(async (item) => {
                    const itemRef = doc(db, "prodcutos", item.id);
                    await updateDoc(itemRef, {
                        stock: increment(-item.qty)
                    });
                })

                clear();
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                cartList.length === 0
                    ? <span className='texto'>El carrito esta vacio</span>
                    : cartList.map(item => <div className='tarjeta'><img src={item.picture} /> Nombre: {item.nombre} - Piezas: {item.qty} - Precio: {item.price} - Total: ${totalProductos(item.id)}- <button onClick={() => removeItem(item.id)} className='eliminar'>Eliminar</button></div>)
            }

            <button onClick={clear} className='vaciar'>Vaciar Carrito</button>

            {
                cartList.length > 0 &&
                <div className='totalPagar'>
                    <p className='textPagar'>Total a pagar: <span>${total()} </span></p>
                    <button className='pagar' onClick={createOrder}>Pagar</button>
                </div>
            }
        </>
    )
}

export default Cart;
