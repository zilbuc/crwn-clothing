import React from 'react'
import StripeCheckout, { Token } from 'react-stripe-checkout';

type Props = {
  price: number;
}

export const StripeCheckoutButton: React.FC<Props> = ({ price }): JSX.Element => {
  const priceForStripe = price * 100;

  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ? process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY : 'anystring';

  const onToken = (token: Token): void => {
    console.log(token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing UnLtd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}