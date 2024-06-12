import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import imgbuy from '../assets/img-logo/imgcompra.png'
import { Link } from 'react-router-dom';
const CheckoutForm = ({cart}) => {

  const stripe = useStripe();
  const element = useElements();

  const handleSubmit = async (e) => {
    e.prevenDefault


    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: element.getElement(CardElement)
    });

    if (!error) {
      console.log(paymentMethod)
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group text-center mb-4">
<div className="aca insertar logica">AstroSnap</div>
              <img src={imgbuy} alt="Volcán Lincabur" className="img-fluid mb-3" />            </div>
            <div className="form-group mb-3">
              <CardElement className="form-control" />
            </div>
            <div className="text-center">
      <Link to="/product-list" className="btn btn-primary">
        Seguir Comprando
      </Link>
    </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default CheckoutForm;
