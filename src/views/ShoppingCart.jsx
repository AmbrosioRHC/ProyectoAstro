import Card from '../components/card.jsx';
import img1 from '../assets/img-logo/img1.jpg';
import Navbar from '../components/navbar.jsx';
import './Login.css'


const shoppingCart = () => {

    const stockImage = [
        {
          id: "123456",
          format: "jpg",
          description: "this is image 1",
          price: "$6.32",
          img :img1,
          
        },
      ]

    return (

        <>
        
        
        <Navbar/>
        <div className="row align-items">
        <div className=" container-shop">
       <div className="shopping-cart ">
    <div className="item1">
    <Card stockImage={stockImage[0]} />
    </div>

    <div className="item2">
    <Card stockImage={stockImage[0]} />
    </div>

</div>
</div>
</div>
<div className="row  align-items">



</div>
        
       
        </>

    )




}

export default shoppingCart;