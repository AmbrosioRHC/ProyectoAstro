import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import imgbuy from '../assets/img-logo/tu_compra.png'

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
<<<<<<< HEAD
<div className="aca insertar logica">AstroSnap</div>
              <img src={imgbuy} alt="Volcán Lincabur" className="img-fluid mb-3" />            </div>
=======
              <div>
                <p>Fotos: { } </p>
                <p>Precio: { } </p>
                <p>Cantidad: { } </p>
                <p>Total: { } </p>

              </div>
              <img src="https://www.canva.com/design/DAGGYe7pUTM/-SPh2e3x9HtGP9sIAWJOWg/edit?utm_content=DAGGYe7pUTM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" alt="Volcán Lincabur" className="img-fluid mb-3" />            </div>
>>>>>>> 9a56ab08cfa8bfe03fcd3024840ac15cc82e901a
            <div className="form-group mb-3">
              <CardElement className="form-control" />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Buy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default CheckoutForm;
