import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.init";


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
const [brands, setBrands] = useState([]);
const [user, setUser] = useState([]);
const [loading, setLoading] = useState(true);
const [showPassword, setShowPassword] = useState(false);

const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}
useEffect( () => {
    const unsubscribe =   onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
          setLoading(false)
      })
      return () => {
          unsubscribe();
      }
  }, [])


console.log(user);


    const authInfo = {
        brands,
        setBrands,
        createNewUser,
        setUser,
        user,
        showPassword,
        setShowPassword,
        loading,
        setLoading
        
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;