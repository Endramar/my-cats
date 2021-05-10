import React from 'react';
import Layout from '../layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from '../../store/store'

function App() {
  return (
    <Provider store= {store}>
     <Layout/>
    </Provider>
  );
}

export default App;
