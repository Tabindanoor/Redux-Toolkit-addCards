import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import ProductDetail from './components/ProductDetail';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
  <Route exact path="/" element={  <App />} />
  <Route exact path="/cart" element={  <Cart />} />
  <Route exact path="/productDetail" element={  <ProductDetail />} />
  </Routes>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
