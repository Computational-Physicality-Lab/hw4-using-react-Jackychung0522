import React from 'react';
import './shoppingCart.css'
import { useState } from 'react';
import Details from './details';
import App from './App';
import { Cart } from './App';
import { setCart } from './App';
import { Link } from 'react-router-dom';
import routes from './AppRouter';
function ShoppingCart(props) {
    for (let i = 0; i < Cart.length; i++) {
        console.log(Cart[i].quantity);
    }
    //const [Cart, setCart] = useState([])
    const shirtObject = JSON.parse(localStorage.getItem('shirt'))
    const color = JSON.parse(localStorage.getItem('color'))
    const selectedButton = JSON.parse(localStorage.getItem('selectedButton'))
    const side = JSON.parse(localStorage.getItem('side'))
    const size = JSON.parse(localStorage.getItem('size'))
    //  const shirt = {
    //     name: shirtObject,
    //     color: color,
    //     size: size,
    //     price: selectedButton.price,

    // }

    //cart.push(shirt);

    function handleRemoveItem(item) {
        const newCart = Cart.filter((cartItem) => cartItem !== item);
        setCart(newCart);
    }



    return (

        <div className="blockforshoppingCart">


            <div className="shoppingCart">
                <div className="cartProductBlock">
                    <div id='mycart'>My Cart</div>

                </div>
                <hr />
                <div>
                    {Cart.length === 0 ? (
                        <div className='emptyCart'>
                            <p>Your Cart is empty</p>
                        </div>
                        
                    ) : (
                        Cart.map((item, index) => (
                            <div className="cartProductBlock" key={index}>
                                <div className="cartProductName">
                                    <p>{item.name}</p>
                                    <img src={selectedButton.colors[item.color]["front"]} />
                                </div>
                                <div className="cartProductInfor">
                                    <label htmlFor="quantity" className="quantity" value={item.quantity}>Quantity:</label>
                                    <select id="quantity" name="quantity">
                                        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                    <p>Color: {item.color}</p>
                                    <p>Size: {item.size}</p>
                                    <p>Price (each): {item.price}</p>
                                    <div className="cartProductBlock">
                                        <button className="cartButton" onClick={() => handleRemoveItem(item)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>
            <div className="total">
                <div className="totalBlock">
                    <h3>Order Summary</h3>
                    <p>Subtotal: </p>
                    <p>Est.Shipping: </p>
                    <p>Total: </p>
                    <Link to={routes.NotImplement}>
                        <button className="cartButton">Sign in and checkout</button>
                    </Link>
                </div>
                <div className='continueShopping'>
                    <Link to={routes.Tshirts}>
                        <button className="cartButton">Continue Shopping</button>
                    </Link>
                </div>

            </div>


        </div>

    );
}

export default ShoppingCart;