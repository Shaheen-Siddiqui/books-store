import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { AuthContextProvider } from "./context/authContext";
import { FireStoreContextProvider } from "./context/firestoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FireStoreContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </FireStoreContextProvider>
  </React.StrictMode>
);
