import React, { createContext } from 'react';
import useProducts from './../Hooks/useProducts';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

   const {products , setProducts} = useProducts();
   const data =  {products , setProducts}
    return (
           <AuthContext.Provider value={data}>
               { children }
           </AuthContext.Provider>
);
};

export default AuthProvider;
