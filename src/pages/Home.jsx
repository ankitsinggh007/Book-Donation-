import React,{useContext} from 'react'
import classes from "./Home.module.css"
import BCA from "../Media/BCA.png"
import BBA from "../Media/BBA.jpg"
import BCOM from "../Media/BCOM.webp"
import { User } from '../App'
function Home() {
const {LoggedInUserData, setLoggedInUserData,createUser}=useContext(User);

    return (
        <div className={classes.Main}>
           {LoggedInUserData.Role==="Donor" &&<span className={classes.Welcome}>{`hi,${LoggedInUserData.firstName}  today which book you want to donate,make sure you store book in correct option as given below`}</span>}
            {LoggedInUserData.Role!=="Donor" &&<span className={classes.Welcome}>{`hi, ${name} which book you want to read you can choose from any of these options`}</span> }
            <div className={classes.Course}>
                <div className={classes.Card}>
                    <div class="card" className={classes.Body}>
                        <img src={BCOM} class="card-img-top" alt="BCA" />
                        <div class="card-body">
                            <h5 class="card-title">Bachelors's in Computer Application</h5>
                            <p class="card-text">A Bachelor of Computer Applications (BCA) is a undergraduate degree course in computer applications.</p>
                            <a href="#!" class="btn btn-primary"className={classes.Button}>Select</a>
                        </div>
                    </div>




                </div>
                <div className={classes.Card}>
                <div class="card" className={classes.Body}>
                        <img src={BBA} class="card-img-top" alt="BCA" />
                        <div class="card-body">
                            <h5 class="card-title">Bachelors's in Computer Application</h5>
                            <p class="card-text">A Bachelor of Computer Applications (BCA) is a undergraduate degree course in computer applications.</p>
                            <a href="#!" class="btn btn-primary"className={classes.Button}>Select</a>
                        </div>
                    </div>
                </div>
                <div className={classes.Card}>
                <div class="card" className={classes.Body}>
                        <img src={BCA} class="card-img-top" alt="BCA" />
                        <div class="card-body">
                            <h5 class="card-title">Bachelors's in Computer Application</h5>
                            <p class="card-text">A Bachelor of Computer Applications (BCA) is a undergraduate degree course in computer applications.</p>
                            <a href="#!" class="btn btn-primary"className={classes.Button}>Select</a>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    )
}

export default Home