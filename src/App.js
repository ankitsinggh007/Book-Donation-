import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState, useEffect, createContext } from "react";
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import { getDocs } from 'firebase/firestore';
import DataBase from "./component/Firbase"
import { collection, addDoc } from "firebase/firestore";
import { query, where, getDoc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";




export const User = createContext({});



function App() {
  const [Data, setData] = useState();
  const Navigate = useNavigate();
  const [Creadential, setCreadential] = useState({ fname: "", lname: "", email: "", Role: "", Password: "" });
  const [LoggedInUserData, setLoggedInUserData] = useState({ id: "", firstName: "", lastName: "", email: "", Role: "", isAuthrized: false, Liked: [], Cart: [], isbpn: [], isbpn_Cart: [] });
  const [Message, setMessage] = useState("");


  const auth = getAuth();

  //  Fetch Data
  const FetchData = async (email) => {
    console.log(email, "email")
    const citiesRef = collection(DataBase, "User");
    const q = query(citiesRef, where("email", "==", `${email}`));
    console.log(q, "q");
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot, "querySnapshot")
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setLoggedInUserData({ ...LoggedInUserData, ...doc.data(), isAuthrized: true, id: doc.id });
    });
    Navigate("/home")
  }

  // Creat user in DataBase
  const CreateUserInDataBase = async () => {
    const DocRef = await addDoc(collection(DataBase, "User"), {
      email: Creadential.email,
      firstName: Creadential.fname,
      lastName: Creadential.lname,
      Role: Creadential.Role,
    });
    Navigate("/login")
  }

  // Create User
  const createUser = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, "user");
        CreateUserInDataBase();

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage, "error");
        setCreadential({ ...Creadential, message: errorCode.split("/")[1] })

      });
  }
  // Login User
  const verifyCredential = async () => {
    console.log("i am in verifyCredential")
    const res = await signInWithEmailAndPassword(auth, Creadential.email, Creadential.Password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email, "user");
        FetchData(user.email);

        Navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage, "err");
        setCreadential({ ...Creadential, message: errorCode.split("/")[1] })

      });

  }
  console.log(LoggedInUserData,"LoggedInUser")

  return (
    <MDBContainer fluid>
      <User.Provider value={{ Creadential, setCreadential, createUser, verifyCredential, LoggedInUserData, setLoggedInUserData }}>

        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {LoggedInUserData.isAuthrized && <Route path="/home" element={<Home />} />}
        </Routes>
      </User.Provider>

    </MDBContainer>
  );
}

export default App;
