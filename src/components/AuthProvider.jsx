import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "./firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password, photo) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password, photo);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          })
    }


    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            console.log('Current User', currentUser);
            setLoading(false);
        }); 
        return () => {
            return unsubscribe()
        }
    } , [])

    const auth = getAuth(app);
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        auth,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;