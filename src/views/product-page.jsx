import Navbar from "../components/navbar";
import ProductImage from "../components/productImage";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const ProductPage = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const { products, cart } = store;

    const product = products.find(product => product.id === parseInt(id));

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    const addToCart = () => {
        actions.addToCart(product);
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
                <div className="row justify-content-around m-2 mt-5">
                    <div className="containerImage col-5 container">
                        <ProductImage />
                        <div className="rating mt-3 m-2">
                            <span>rating {product.rating} <i className="fa-solid fa-star"></i></span>
                        </div>
                    </div>
                    <div className="rightContainer col-5 mt-5 container">
                        <div className="mt-3 product-name" >
                            <div className="row">
                                <div className="col-8">
                                    <p className="fs-4 fw-semibold"> {product.name}</p>
                                </div>
                                <div className="col-4">
                                    <p className="float-end m-2 share"><i className="fa-regular fa-share-from-square"></i></p>
                                    <p className="float-end m-2 likes"><i className="fa-solid fa-heart"></i>{product.likes}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 product-price">
                            <div className="row">
                            <div className="col-8">
                                <div className="price fs-1 fw-semibold">
                                    <p>$ {product.price.toFixed(0)}</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <p className=" reviews float-end mt-3 m-2"><i className="fa-regular fa-comment-dots"></i> {product.reviews} reviews</p>
                            </div>
                            </div>
                        </div>
                        <div className=" mt-5">
                            <button onClick={addToCart} className="btn btn-primary rounded-pill btn-product-page" id="btn-product-page"><i className="fa-solid fa-cart-shopping"></i>  Agregar al carrito</button>
                        </div>
                        {cart.length > 0 && ( // Mostrar el botón de eliminar solo si hay elementos en el carrito
                            <div className="mt-5">
                                <button onClick={() => removeFromCart(product.id)} className="btn btn-danger rounded-pill" id="btn-product-page"><i className="fa-solid fa-trash"></i> Eliminar del carrito</button>
                            </div>
                        )}
                        <div className="mt-3 ms-1">
                            {cart.some(item => item.id === product.id) && (
                                <div>
                                    <p>En el carrito: {cart.find(item => item.id === product.id).quantity}</p>
                                </div>
                            )}
                        </div>
                        <div className="product-footer container">
                        <div className="shippingPolicies mt-3">
                            <p><i className="fa-solid fa-truck"></i> Envío gratis desde $200</p>
                        </div>
                        <div className="shippingPolicies mt-3">
                            <p><i className="fa-solid fa-cart-shopping"></i> Términos y condiciones</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
