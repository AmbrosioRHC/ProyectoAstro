import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckoutForm = () => {

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
              <img src="https://st1.uvnimg.com/dims4/default/b1d5a79/2147483647/thumbnail/1024x576%3E/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fj%2Fjorgelina-alvarez-6.jpg" alt="Volcán Lincabur" className="img-fluid mb-3" />            </div>
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
