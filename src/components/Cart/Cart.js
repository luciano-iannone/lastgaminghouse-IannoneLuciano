import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import CartItem from '../Cart/CartItem'
import { Link } from 'react-router-dom'
import './CartItem.css'


const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>NO ITEMS ADDED TO CART</h1>
                <Link to='/' className='Option'>Products</Link>
            </div>
        )
    }

    return (
        <div className='CheckoutSection'>
            { cart.map(p => <CartItem key={p.id} {...p} />) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button'>Clear Cart</button>
            <Link to= '/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart