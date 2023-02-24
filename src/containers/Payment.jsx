import MPButton from "../Components/MPbutton";
import AppContext from "../Context/AppContext";
import { useContext } from "react";





const Payment = () => {
 
    const { state } = useContext(AppContext);
    console.log(state.cart)

    return (
        <>
        <main>
            <h1>resumen del pedido</h1>
            {state.cart.map((item) => (
            <div  key={item.name}>
              <div >
                <h4>{item.name}</h4>
                <span>${item.price}</span>
              </div>{' '}
            </div>
          ))}
        <MPButton></MPButton>
        </main>
        </>
    );
}

export default Payment;