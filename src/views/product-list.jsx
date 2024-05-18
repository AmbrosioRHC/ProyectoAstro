import ProductCollection from "../components/productCollection";
import Navbar from "../components/navbar";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const ProductList = () => {
    const { actions, store } = useContext(Context); // Obtener el estado y las acciones del contexto
    const { products } = store; // Obtener productos del estado global
    const { id } = useParams(); // Obtener el parámetro de ruta "id"

    useEffect(() => {
        actions.loadProducts(); // Cargar productos al iniciar
    }, [actions]);

    const product = products.find(product => product.id === parseInt(id));

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="container mt-5 paddingTop">
                <ProductCollection />
            </div>
        </>
    );
};

export default ProductList;
