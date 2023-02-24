import { initializeApp } from "firebase/app";
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCrqLXbFywetM1SoIi0pf7uBo3NQvBpbNo",
  authDomain: "estudio215.firebaseapp.com",
  databaseURL: "https://estudio215-default-rtdb.firebaseio.com",
  projectId: "estudio215",
  storageBucket: "estudio215.appspot.com",
  messagingSenderId: "132592449014",
  appId: "1:132592449014:web:dbe85f123263b076a483d7",
  measurementId: "G-4H2T7K1VJF"
};

const FirebaseApp = initializeApp(firebaseConfig);





export default FirebaseApp;