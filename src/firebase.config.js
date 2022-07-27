import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFireStore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'



const firebaseConfig = {

    apiKey: "AIzaSyBbDWTEw3sle8n7EPZgkmp18jy96DcNwSc",
  
    authDomain: "restrauntapp-96f43.firebaseapp.com",
  
    databaseURL: "https://restrauntapp-96f43-default-rtdb.firebaseio.com",
  
    projectId: "restrauntapp-96f43",
  
    storageBucket: "restrauntapp-96f43.appspot.com",
  
    messagingSenderId: "684799669802",
  
    appId: "1:684799669802:web:9b4abb79d92ed0ab12f553",
  
    measurementId: "G-6NC99W86DR"
  
  };

  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFireStore(app)
  const storage = getStorage(app)

  export {app, firestore, storage};

  
  
  