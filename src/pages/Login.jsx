import React, { useState } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import classes from "./Login.module.css";
import LoginBanner from "../Media/LoginBanner.svg"
export default function App() {
    const [loginRegisterActive , setloginRegisterActive ] = useState("login")
    const handleLoginRegisterClick=()=>{

    }
  return (
    <div className={classes.Container}>
    <div className={classes.Box}>
      <MDBTabs  pills justify className={'mb-3'}>
        <MDBTabsItem>
          <MDBTabsLink
            active={true}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
       
      </MDBTabs>

      <MDBTabsContent >
        <MDBTabsPane show={loginRegisterActive === 'login'}>
          <form >
            <MDBInput className='mb-4' type='email' id='form7Example1' label='Email address' />
            <MDBInput className='mb-4' type='password' id='form7Example2' label='Password' />


            <MDBBtn type='submit' className='mb-4' block>
              Sign in
            </MDBBtn>

            <div className='text-center'>
              <p>
                Not a member? <a href='#!'>Register</a>
              </p>
            </div>
          </form>
        </MDBTabsPane>
        
      </MDBTabsContent>
    </div>
    <div className={classes.Image}>
        <img src={LoginBanner} width="100%"/>
        

    </div>
    </div>
  );
}