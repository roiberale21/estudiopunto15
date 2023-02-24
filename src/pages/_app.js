
import Navbar from '@/Components/Navbar';
import '@/styles/globals.css'
import AppContext from '../Context/AppContext'
import useInitialState from '../hooks/useInitialState'

function MyApp({ Component, pageProps }) {

  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
export default MyApp;