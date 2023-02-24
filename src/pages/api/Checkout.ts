// This is just the package (installed via npm or yarn) and its types
import mercadopago from "mercadopago"
import type { NextApiRequest, NextApiResponse } from 'next'
import type { CreatePreferencePayload, PreferencePayer, PreferenceBackUrl } from 'mercadopago/models/preferences/create-payload.model'



export default function handler(
   req: NextApiRequest,
   res: NextApiResponse
   ) {
  
  mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN,
  })
  console.log(req.body);
  const request = req.body;
  
  const cart = request.cart;

  if (!cart) {
    return { error: 'Cart is not defined' };
  }
  
  const items = cart.map((item) => ({
    id: item.id,
    title: item.title,
    unit_price: item.price,
  }));
  



  let preference: CreatePreferencePayload = {
   
    binary_mode: true,
   
    items: items,
    // payer: {
    //   name: buyer.name,
    //   surname: buyer.name.split(" ")[1] ?? "TGB" as string,
    //   email: buyer.email as string
    // } as PreferencePayer,
    
    back_urls: {
      success: "https://success.com",
      failure: "https://failure.com",
      pending: "https://pending.com"
    } as PreferenceBackUrl,
    
    auto_return: "approved"
  }


      
  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.status(200).json({global: response.body.id})
    })
    .catch((error) => {
      res.status(500).json({global: error})
    })
}
