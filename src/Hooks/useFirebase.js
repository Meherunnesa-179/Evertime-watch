import  { useState , useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged, createUserWithEmailAndPassword, updateProfile , signInWithEmailAndPassword , signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user , setUser] = useState({});
    const [isLoading , setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth , (user)=> {
             if(user){
                  
                 setUser(user)
             } else{
                 setUser({})
             }
             setIsLoading(false)
        })
         return ()=> unsubscribe()
   },[])    
   const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setIsLoading(false));
}


//register user

const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);
            // save user to the database
            saveUser(email, name, 'POST');
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
        })
        .catch((error) => {
            setAuthError(error.message);
            // console.log(error);
        })
        .finally(() => setIsLoading(false));
}

//login userCredential

const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
}


const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    console.log(email , displayName);
    fetch('https://guarded-inlet-45451.herokuapp.com/users', {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
}


const logOut=()=> {
   signOut(auth).then(() => {
       setUser({})
     }).catch((error) => {
       // An error happened.
     });
}

    return {
        signInWithGoogle,
        user,
        setUser,
        authError ,
        registerUser,
        loginUser,
        isLoading,
        saveUser,
        setIsLoading,
        logOut
    }
};

export default useFirebase;