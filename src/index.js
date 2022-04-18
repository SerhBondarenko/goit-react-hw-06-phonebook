import React from 'react';
import ReactDOM from 'react-dom';
import  App  from './components/App';
//import reportWebVitals from './reportWebVitals';
import { Provider} from "react-redux";
import './index.css';
import{ store, persistor }from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
//import {persistor} from './redux/configureStore'

 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//reportWebVitals();

