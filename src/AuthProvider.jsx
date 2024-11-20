import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.init";


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
const [brands, setBrands] = useState([]);
const [user, setUser] = useState([]);
const [loading, setLoading] = useState(true);
const [showPassword, setShowPassword] = useState(false);
const [email, setEmail] = useState('')

const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
const logOut = () => {
    setLoading(true)
    return signOut(auth)
}
const googleSignup =(auth, provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
}


const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const googleLogin = (auth, provider) => {
    setLoading(true)
return signInWithPopup(auth, provider)
}

const updateProfiler = (updatedProfile) => {
    setLoading(true)
    return updateProfile(auth.currentUser, updatedProfile);
}
const resetPassword = (auth, email) => {
    return sendPasswordResetEmail(auth, email)
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



    const authInfo = {
        brands,
        setBrands,
        createNewUser,
        setUser,
        user,
        showPassword,
        setShowPassword,
        loading,
        setLoading,
        logOut,
        googleSignup,
        loginUser,
        googleLogin,
        updateProfiler,
        resetPassword,
        email,
        setEmail
        
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;