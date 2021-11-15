import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory , useLocation} from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {

        const [loginData, setLoginData] = useState({});
        const {signInWithGoogle ,  loginUser ,  authError } =useFirebase();
        const history = useHistory();
        const location = useLocation();


          const handleLoginSubmit = e => {
              loginUser(loginData.email, loginData.password, location, history);
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
             <div className="container mx-auto w-50 text-center m-5 p-5 ">
            <h2>Login</h2>
               <form onSubmit={handleLoginSubmit}>
               <input onBlur={handleOnBlur} type="email" name="email" className="w-50 m-2 text-center" id="email" placeholder="Enter your email" />
               <br/>
                <input onBlur={handleOnBlur} type="password" name="password" id="password"  className="w-50 m-2 text-center" placeholder="Password" />
                <br />
                <input type="submit" className="btn-warning w-50 m-2 text-center rounded-3" value="Submit" />
                <br />
                {authError && <h2 >{authError}</h2>}
               </form>
               <p>new to Evertime-Watch ? <Link to ="/register">Create An Account</Link></p>
                <p>Or</p>
                <button className="btn-warning w-50 m-2 text-center rounded-3"
                  onClick={handleGoogleSignIn}>Sign-in with google</button>
            </div>
        </div>
    );
};

export default Login;