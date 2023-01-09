import React from 'react'
import classes from "./Home.module.css"
import BCA from "../Media/BCA.png"
import BBA from "../Media/BBA.jpg"
import BCOM from "../Media/BCOM.webp"
function Home() {
    return (
        <div className={classes.Main}>
            <span className={classes.Welcome}>hi, name today which book you want to donate,make sure you store book in correct option as given below</span>
            {/* <span className={classes.Welcome}>hi, name wich book you wnat to read you can chose from any of these option</span> */}
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