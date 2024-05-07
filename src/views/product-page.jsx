import Navbar from "../components/navbar";
import ProductImage from "../components/productImage";

const ProductPage = () => {
    return (
        <>
            <Navbar />
            <div className="container m-5 p-1">
                <div className="row justify-content-around mt-5">
                    <div className="containerImage col-5 container">
                        <ProductImage />
                        <div className="rating mt-3 ">
                            <span>rating 4.8 <i className="fa-solid fa-star"></i></span>
                        </div>
                    </div>
                    <div className="rightContainer col-5 mt-5 container">
                        <div className="mt-3" >
                            <div className="row">
                                <div className="col-8">
                                    <p className="fs-4 fw-semibold">Fotografía Astro</p>
                                </div>
                                <div className="col-4">
                                    <p className="float-end m-2"><i className="fa-regular fa-share-from-square"></i></p>
                                    <p className="float-end m-2"><i className="fa-regular fa-bookmark"></i></p>
                                    <p className="float-end m-2"><i className="fa-solid fa-heart"></i>109</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="price mt-5 col-6 fs-1 fw-semibold">
                                <p>$ 100,00 </p>
                            </div>
                            <div className="reviews float-end col-3 mt-5"><p><i className="fa-regular fa-comment-dots"></i> 67 Reviews</p></div>
                        </div>
                        <div className=" mt-5">
                            <button className="btn btn-primary rounded-pill"><i className="fa-solid fa-cart-shopping"></i>  Agregar al carrito</button>
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