import Navbar from "../components/navbar";
import ProductImage from "../components/productImage";
import React, { useContext } from "react";
import { Context } from "../store/appContext";


const ProductPage = () => {

    const { store, actions } =  useContext(Context);
    const { product, cart } = store;

    const addToCart = () => {
        actions.addToCart(product);
        setCart([...cart, product]);
    }

    const removeFromCart = (productId) => {
        actions.removeFromCart(productId);
    }

    const clearCart = () => {
        actions.clearCart();
    }
    
    return (
        <>
            <Navbar />
            <div className="container m-5 p-1">
                <div className="row justify-content-around mt-5">
                    <div className="containerImage col-5 container">
                        <ProductImage />
                        <div className="rating mt-3 ">
                            <span>rating {product.rating} <i className="fa-solid fa-star"></i></span>
                        </div>
                    </div>
                    <div className="rightContainer col-5 mt-5 container">
                        <div className="mt-3" >
                            <div className="row">
                                <div className="col-8">
                                    <p className="fs-4 fw-semibold"> {product.name}</p>
                                </div>
                                <div className="col-4">
                                    <p className="float-end m-2"><i className="fa-regular fa-share-from-square"></i></p>
                                    <p className="float-end m-2"><i className="fa-regular fa-bookmark"></i></p>
                                    <p className="float-end m-2"><i className="fa-solid fa-heart"></i>{product.likes}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="price mt-5 col-6 fs-1 fw-semibold">
                                <p>$ 100,00 </p>
                            </div>
                            <div className="reviews float-end col-3 mt-5"><p><i className="fa-regular fa-comment-dots"></i> {product.reviews} reviews</p></div>
                        </div>
                        <div className=" mt-5">
                            <button onClick={() => addToCart(product)} className="btn btn-primary rounded-pill"><i className="fa-solid fa-cart-shopping"></i>  Agregar al carrito</button>
                        </div>
                        <div className="mt-5">
                            <button onClick={() => removeFromCart(product.id)} className="btn btn-danger rounded-pill"><i className="fa-solid fa-trash"></i>  Eliminar del carrito</button>
                        </div>
                        <div>
                            {cart.length > 0 ? (
                                <div>
                                    <h2>Carrito</h2>
                                    <ul>
                                        {cart.map(item => (
                                            <li key={item.id}>
                                                {item.name} - ${item.price}
                                                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                                            </li>
                                        ))}
                                    </ul>
                                    <button onClick={clearCart}>Vaciar Carrito</button>
                                </div>
                            ) : (
                                <p>El carrito está vacío</p>
                            )}
                        </div>
                        <div className="shippingPolicies mt-5">
                            <p><i className="fa-solid fa-truck"></i> Envío gratis desde $200,00</p>
                        </div>
                        <div className="shippingPolicies mt-2">
                            <p><i className="fa-solid fa-cart-shopping"></i> Términos y condiciones</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;