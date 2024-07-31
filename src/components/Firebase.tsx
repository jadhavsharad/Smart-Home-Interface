import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

    const firebaseConfig = {
        apiKey: JSON.stringify(import.meta.env.VITE_apiKey),
        authDomain: JSON.stringify(import.meta.env.VITE_authDomain),
        databaseURL: JSON.stringify(import.meta.env.VITE_databaseURL),
        projectId: JSON.stringify(import.meta.env.VITE_projectId),
        storageBucket: JSON.stringify(import.meta.env.VITE_storageBucket),
        messagingSenderId: JSON.stringify(import.meta.env.VITE_messagingSenderId),
        appId: JSON.stringify(import.meta.env.VITE_appId),
        measurementId: JSON.stringify(import.meta.env.VITE_measurementId),
        
      };
    
      const firebaseapp = initializeApp(firebaseConfig);
      const db = getDatabase(firebaseapp);
      
export default db
