import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW7vhV7UaJsrJuPXdUmTCDGQx_BmtezRw",
  authDomain: "bicycles-340516.firebaseapp.com",
  databaseURL: "https://bicycles-340516-default-rtdb.firebaseio.com",
  projectId: "bicycles-340516",
  storageBucket: "bicycles-340516.appspot.com",
  messagingSenderId: "293888771173",
  appId: "1:293888771173:web:d27503df94ab81efb7f28c"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export default database;