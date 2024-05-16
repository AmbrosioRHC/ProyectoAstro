import ProductCollection from "../components/productCollection"
import Navbar from "../components/navbar"
const ProductList = () => {
    return (
    <>
    <div >
    <Navbar/>
    </div>
    <div className="container mt-5 paddingTop">
    <ProductCollection/>
    </div>
    </>
)
}

export default ProductList