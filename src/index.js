import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './index.css';
import './signuppage.css';
import './login.css';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter as Router, Routes, Route, useHistory } from 'react-router-dom';
import store from './state/store'
import App from './App';
import UserRegistration from './components/UserRegistration';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'
import Address from './resume_components/Address'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider store={store} >
      <Router>
        <Routes>
          <Route path='/*' element={<App />}/>
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>
);
