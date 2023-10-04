import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log('the current user',currentUser);
        })
        return ()=> unsubscribe();
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;