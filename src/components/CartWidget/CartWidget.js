import '../CartWidget/CartWidget.css'
import carro from '../assets/carro.png';
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return ( 
        <Link to='/Cart' className='CartWidget'>
            <img className='CartImg' src={carro} alt='cart-widget'/>
            { totalQuantity }
        </Link>
    );
}

export default CartWidget;