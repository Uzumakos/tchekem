import  { React, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { gapi } from 'gapi-script';

const clientId = process.env.REACT_APP_GOOGLE_API_TOKEN;

function App() {
  
  useEffect(() => {    //Mwen itilize useEffect pou mte ka kreye yon fonction pou mache yon lien koneksyon ak Google API
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope:""
      })
    };

    gapi.load('client:auth2', start);
  })
  
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App