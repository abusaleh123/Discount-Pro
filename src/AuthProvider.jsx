import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "./firebase.init";


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
const [brands, setBrands] = useState([]);
const [user, setUser] = useState([]);
const [showPassword, setShowPassword] = useState(true);
const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}


console.log(user);


    const authInfo = {
        brands,
        setBrands,
        createNewUser,
        setUser,
        user,
        showPassword,
        setShowPassword
        
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;