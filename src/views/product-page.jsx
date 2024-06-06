import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbar from "../components/navbar";

const ProductPage = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const { products, cart = [], user_id } = store;

    const [quantity, setQuantity] = useState(1);
    const [notification, setNotification] = useState({ isVisible: false, message: '' });

    useEffect(() => {
        if (products.length === 0) {
            actions.loadProducts();
        }
    }, [actions, products.length]);

    const product = products.find(product => product.id === parseInt(id));

    if (products.length === 0) {
        return <p>Cargando productos...</p>;
    }

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    const addToCart = () => {
        actions.addToCart(product, user_id, quantity);
        showNotification(`${product.name} se ha agregado al carrito.`);
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const showNotification = (message) => {
        setNotification({ isVisible: true, message });
        setTimeout(() => {
            setNotification({ isVisible: false, message: '' });
        }, 3000);
    };

    const formatPrice = (price) => {
        return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    };

    return (
        <>
            <Navbar />
            <div className="container container-product-page my-5 py-3 textColorProductPage">
                {notification.isVisible && <div className="alert alert-success">{notification.message}</div>}
                
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                        <li className="breadcrumb-item"><Link to="/product-list">Productos</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                    </ol>
                </nav>

                <div className="row justify-content-around my-3">
                    <div className="containerImage col-lg-5 col-md-6 col-12">
                        <img src={product.image} alt={product.name} className="img-fluid" />
                    </div>
                    <div className="rightContainer col-lg-5 col-md-6 col-12 mt-md-0 mt-3">
                        <div className="product-name">
                            <div className="row">
                                <div className="col-8">
                                    <p className="fs-4 fw-semibold">{product.name}</p>
                                </div>
                                <div className="col-4 text-end">
                                </div>
                            </div>
                        </div>
                        <div className="product-price">
                            <div className="row">
                                <div className="col-8">
                                    <div className="price fs-1 fw-semibold">
                                        <p>{formatPrice(product.price)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="quantity-controls mt-3">
                            <button onClick={decrementQuantity} className="btn btn-primary rounded-pill">-</button>
                            <span className="mx-3">{quantity}</span>
                            <button onClick={incrementQuantity} className="btn btn-primary rounded-pill">+</button>
                        </div>
                        <div className="mt-3">
                            <Link to="/stripe" className="btn btn-primary rounded-pill btn-product-page">
                                <i className="fa-solid fa-cart-shopping"></i> Comprar Ahora
                            </Link>
                        </div>
                        <div className="mt-2">
                            <button className="btn btn-primary rounded-pill btn-product-page" onClick={addToCart}>
                                <p className="m-0">Agregar al carrito</p>
                            </button>
                        </div>
                        <div className="product-footer mt-3">
                            <div className="shippingPolicies mt-3">
                                <a href="http://localhost:5173/privacy" className="termsProduct">
                                    <p><i className="fa-solid fa-cart-shopping"></i> Términos y condiciones</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
