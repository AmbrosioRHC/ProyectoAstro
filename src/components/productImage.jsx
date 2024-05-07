import "../App.css";

const ProductImage = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner carrusel">
                            <div className="carousel-item active">
                                <img src="https://picsum.photos/id/26/600/800" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://picsum.photos/id/28/600/800" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://picsum.photos/id/29/600/800" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductImage;
