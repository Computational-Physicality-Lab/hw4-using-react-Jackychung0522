import React from 'react';
import './shoppingCart.css'
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import routes from './AppRouter';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function ShoppingCart(props) {
    // for (let i = 0; i < Cart.length; i++) {
    //     console.log(Cart[i].quantity);
    // }
    const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem("cart") || "[]"));
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
        sum += parseInt(cart[i].quantity);
        }
        setTotalQuantity(sum);
    }, [cart]);
   
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].quantity);
        console.log(cart[i].price);
    }
    
    const selectedButton = JSON.parse(localStorage.getItem('selectedButton'))
    function handleContinueShopping(){
        localStorage.clear();
    }
    
    function handleQuantityChange(id, quantity) {
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: quantity
                };
            }
            return item;
        });
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        window.location.reload();
    }
    function handleRemoveItem(id) {
        const cart = sessionStorage.getItem("cart");
        let newCart = [];

        if (cart) {
            newCart = JSON.parse(cart).filter((item) => item.id !== id);
            sessionStorage.setItem("cart", JSON.stringify(newCart));
            setCart(newCart);
        }
        window.location.reload();
    }

    let subTotalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        let price = cart[i].price.replace('$', '');
        subTotalPrice += price * cart[i].quantity;

    }
    subTotalPrice = subTotalPrice.toFixed(2);
    let totalPrice;
    totalPrice = parseFloat(subTotalPrice) + 6.95;
    totalPrice = totalPrice.toFixed(2);
    return (
        <div>
        <div className="blockforshoppingCart">


            <div className="shoppingCart">
                <div className="mycart">
                    <div id='mycart'>My Cart({totalQuantity})</div>

                </div>
                {/* <hr /> */}
                <div>
                    {cart.length === 0 ? (
                        <div className='emptyCart'>
                            <p>Your Cart is empty</p>
                        </div>

                    ) : (
                        cart.slice().reverse().map((item, index) => (
                            <div className="cartProductBlock" key={index}>
                                <div className="cartProductName">
                                    <p>{item.name}</p>
                                    <img src={selectedButton.colors[item.color]?.front || 'default-image-path'} />
                                </div>
                                <div className="cartProductInfor">
                                    <DropdownButton
                                        
                                        id="quantity-dropdown"
                                        title={`Quantity: ${item.quantity}`}
                                        onSelect={(eventKey) => handleQuantityChange(item.id, eventKey)}
                                    >
                                        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                                            <Dropdown.Item key={num} eventKey={num}>
                                                {num}
                                            </Dropdown.Item>
                                        ))}
                                    </DropdownButton>
         
                                    <p>Color: <span className="redword">{item.color}</span></p>
                                    <p>Size: <span className="redword">{item.size}</span></p>
                                    <p>Price (each): <span className="redword">{item.price}</span></p>
                                    <div >
                                        <button className="cartButton" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>
            

        </div>
        <div className="total">
        <div className="totalBlock">
            <h3>Order Summary</h3>
            <p>Subtotal: <span className="redword">${subTotalPrice}</span></p>
            <p>Est.Shipping: <span className="redword">$6.95</span></p>
            <p>Total:  <span className="redword">${totalPrice}</span></p>
            <Link to={routes.NotImplement}>
                <button className="cartButton">Sign in and checkout</button>
            </Link>
        </div>
        <div className='continueShopping'>
            <Link to={routes.Tshirts}>
                <button className="cartButton" onClick={()=>handleContinueShopping()}>Continue Shopping</button>
            </Link>
        </div>

    </div>
    </div>

    );
}

export default ShoppingCart;