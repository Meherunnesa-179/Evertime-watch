import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
const Register = () => {


  const [loginData, setLoginData] = useState({});
  const { user,signInWithGoogle , setUser, registerUser, isLoading,setIsLoading, authError } = useFirebase();
  // const {signInWithGoogle , setUser , setIsLoading} = useFirebase();
  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/home";
  // const handleForm = (e) => {
  //   e.preventDefault()
  // }

  const handleLoginSubmit = e => {
    if (loginData.password !== loginData.confirmPassword) {
        alert('Your password did not match');
        return
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
}

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
}


const handleGoogleSignIn = () => {
  signInWithGoogle(location, history)
}
    return (
        <div>
               <div className="container mx-auto w-50 text-center m-5 border border-1 border-primary p-5 ">
            <h2>Register</h2>
            <form onSubmit={handleLoginSubmit}>
               <input type="text"  onBlur={handleOnBlur} name="name" className="w-50 m-2 text-center" id="name" placeholder="Your name" />
               <br/>
               <input type="email"  onBlur={handleOnBlur} name="email" className="w-50 m-2 text-center" id="    email" placeholder="Enter your email" />
               <br/>
                <input type="password"  onBlur={handleOnBlur} name="password" id="password"  className="w-50 m-2 text-center" placeholder="Password" />
                <br />
                <input type="password"  onBlur={handleOnBlur} name="confirmPassword" id="password"  className="w-50 m-2 text-center" placeholder="Confirm Password" />
                <br />
                <input type="submit" className="btn-primary w-50 m-2 text-center rounded-3" value="Submit" />
                <br />
               </form> 
               {/* {isLoading && <h2>Loading</h2> } */}
               {/* {user?.email && alert('user created successfully')} */}
               {authError && <h3>{authError}</h3>}
                <p>Already have an account ? <Link to ="/register">Please Login</Link></p>
                <p>Or</p>
                <button className="btn-primary w-50 m-2 text-center rounded-3"
                  onClick={handleGoogleSignIn}>Sign-in with google</button>
            </div>
        </div>
    );
};

export default Register;