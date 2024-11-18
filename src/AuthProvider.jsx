import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "./firebase.init";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
const [brands, setBrands] = useState([]);

const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}





    const authInfo = {
        brands,
        setBrands,
        createNewUser
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;