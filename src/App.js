import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './component/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <MDBContainer fluid>
      <Navbar/>
      <Login/>
      <Signup/>
    <Home/>

    </MDBContainer>
  );
}

export default App;
