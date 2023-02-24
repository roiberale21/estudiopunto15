import { useEffect, useContext } from 'react'
import AppContext from '../Context/AppContext';

export default function MPButton() {
  const { state } = useContext(AppContext);

  useEffect(() => {
    const fetchCheckout = async () => {
      const res = await fetch('/api/Checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          cart: state.cart,
          buyer:state.buyer
        }),
      })
      const data = await res.json()
      console.log(data.global)


      if(data.global) {
        const script = document.createElement('script') 
        script.type = 'text/javascript'
        script.src = 'https://sdk.mercadopago.com/js/v2' 
        script.setAttribute('data-preference-id', data.global) 
        document.body.appendChild(script) 

        script.addEventListener('load', () => {
          const mp = new window.MercadoPago('TEST-10f04971-8a9e-4667-b63d-19b67d762463', {
            locale: 'es-CO'
          })

          mp.checkout({
            preference: {
              id: data.global
            },
            render: {
              container: '.cho-container',
              label: 'Pagar',
            }
          });
        });
      }
    }

    fetchCheckout()
  }, [])

  return <div className="cho-container"></div>
}
