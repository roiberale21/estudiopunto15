import { useRouter } from 'next/router';
import React, { useContext, useRef } from 'react';
import styles from '../styles/Information.module.css'
import AppContext from '../Context/AppContext';

function Information() {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const router = useRouter();
 
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    router.push('/payment');
  };

  console.log(state.buyer)
  return (
    <>
      <div className={styles.Information}>
        <div className={styles['Information-content']}>
          <div className={styles['Information-head']}>
            <h2>Contact Information:</h2>
          </div>
          <div className={styles['Information-form']}>
            <form ref={form}>
              <label htmlFor="name">
                Full Name
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  id="name"
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  id="email"
                />
              </label>
              <label htmlFor="address">
                Address
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  id="address"
                />
              </label>

              <label htmlFor="apto">
                APT
                <input type="text" placeholder="APT" name="apto" id="apto" />
              </label>
              <label htmlFor="country">
                Country
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  id="country"
                />
              </label>
              <label htmlFor="state">
                State
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  id="state"
                />
              </label>
              <label htmlFor="city">
                City
                <input type="text" placeholder="City" name="city" id="city" />
              </label>
              <label htmlFor="cp">
                Postal Code
                <input
                  type="text"
                  placeholder="Postal Code"
                  name="cp"
                  id="cp"
                />
              </label>
              <label htmlFor="phone">
                Phone
                <input
                  type="text"
                  placeholder="Prone"
                  name="phone"
                  id="phone"
                />
              </label>
            </form>
          </div>
          <div className={styles['Information-buttons']}>

       <div className={styles['Information-next']}>
              <button onClick={handleSubmit} type="button">
                Pagar
              </button>
            </div>
          </div>
        </div>
        <div className={styles['Information-sidebar']}>
          <h3>Order Summary:</h3>
          {state.cart.map((item) => (
            <div className={styles['Information-item']} key={item.name}>
              <div className={styles['Information-element']}>
                <h4>{item.name}</h4>
                <span>${item.price}</span>
              </div>{' '}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Information;