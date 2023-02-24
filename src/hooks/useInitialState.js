import { useState } from "react";
const initialState = {
    cart: [],
    buyer: null,
    orderIsOpen: false,
    menuIsOpen: false,
  };
  
  const useInitialState = () => {
    const [state, setState] = useState(initialState);
  
    const addToCart = (payload) => {
      const { cart } = state;
      const itemIndex = cart.findIndex(item => item.id === payload.id);
    
      if (itemIndex !== -1) {
        const newCart = [...cart];
        newCart[itemIndex].quantity += payload.quantity;
        setState({
          ...state,
          cart: newCart
        });
      } else {
        setState({
          ...state,
          cart: [...cart, payload]
        });
      }
    };
    const setCart = (newCart) => {
      setState({ ...state, cart: newCart });
    };
  
    const removeFromCart = (payload) => {
      setState({
        ...state,
        cart: state.cart.filter((items) => items.id !== payload.id),
      });
      
    };
  
    const toggleOrder = () => {
      setState({
        ...state,
        orderIsOpen: !state.orderIsOpen,
      });
    };
  
    const toggleMenu = () => {
      setState({
        ...state,
        menuIsOpen: !state.menuIsOpen,
      });
    };
    const addToBuyer = (payload) => {
      setState({
        ...state,
        buyer: payload,
      });
    };
  
    return {
      state,
      addToCart,
      removeFromCart,
      toggleOrder,
      toggleMenu,
      setCart, 
      addToBuyer

    };
  };
  
  
  export default useInitialState;