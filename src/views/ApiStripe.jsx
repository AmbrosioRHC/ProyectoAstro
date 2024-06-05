import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe('pk_test_51PK16yP22fvGd27C0GAUuKEbJ61tJsoNfNNgpPLDJkiNttERQRdSSUhhZjMOBrI8ynziPi3PLgOWdksXN3Ewakrh00j8zRjmQO');

const ApiStripe = () => {
  const options = {
    clientSecret: '{{sk_test_51PK16yP22fvGd27CQXpikhrOrupQTWFkwaKx6l5dbV8BVMaGutUNricRihL7thXx2ff83Ul1NPGCiTDsTTDBFPCB00mrCDfj2p}}',
  };

  return (

    <Elements stripe={stripePromise} >
      <div className="container apishop p-4">
        <div className='row ' >
          <div className='col-md-4 offset-md-4'></div>
          <CheckoutForm />
        </div>
      </div>
    </Elements>

  );
};

export default ApiStripe;