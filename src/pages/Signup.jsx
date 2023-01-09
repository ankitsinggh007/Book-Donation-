import React, { useState } from 'react'
import SignupBanner from "../Media/SignupBanner.jpg"

import classes from "./Signup.module.css"
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
    MDBRadio,
    MDBTabsPane,MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem
  } from 'mdb-react-ui-kit';
  


function Signup() {
        const [loginRegisterActive, setloginRegisterActive] = useState("register")
    
    return (
        <div className={classes.Container}>
        <div className={classes.Box}>
             <MDBTabs  pills justify className={'mb-3'}>
        <MDBTabsItem>
          <MDBTabsLink
            active={true}
          >
            Sign Up
          </MDBTabsLink>
        </MDBTabsItem>
       
      </MDBTabs>

        <MDBTabsPane show={loginRegisterActive === 'register'}>
          <form>
            <MDBInput className='mb-4' id='form8Example1' label=' first Name' />
            <MDBInput className='mb-4' id='form8Example2' label='Last Name' />
            <MDBInput className='mb-4' type='email' id='form8Example3' label='Email address' />
            <MDBInput className='mb-4' type='password' id='form8Example4' label='Password' />
            <MDBInput className='mb-4' type='password' id='form8Example5' label='Repeat password' />
           
            <MDBRadio name='inlineRadio' id='inlineRadio1' value='Donor' label='Donor' inline />
              <MDBRadio name='inlineRadio' id='inlineRadio2' value='Receiver' label='Receiver' inline />
            <br/>
            <br/>

            <MDBBtn type='submit' className='mb-4' block>
              Register
            </MDBBtn>
          </form>
        </MDBTabsPane>
      
        </div>

    <div className={classes.Image}>
        <img src={SignupBanner} width="100%"/>
        

    </div>
    </div>
  )
}

export default Signup