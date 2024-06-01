import {createContext, useEffect, useState} from "react";
import app from "../firebase/firebase.config.js";
import {getAuth, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import PropTypes from "prop-types";
import useAxiosPublic from "../hooks/useAxiosPublic.jsx";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const axiosPublic = useAxiosPublic();

    // Create new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update user info
    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
    }

    // User login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Login with Google
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Login with GitHub
    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged (auth,
            currentUser => {
                setUser(currentUser);
                if (currentUser) {
                    const userInfo = {email: currentUser.email};
                    axiosPublic.post('/jwt', userInfo)
                        .then(res => {
                            if (res.data.token) {
                                localStorage.setItem("access-token", res.data.token);
                            }
                        })
                } else {
                    localStorage.removeItem("access-token");
                }
                setLoading(false);
            });
        return () => unsubscribe();
    }, [axiosPublic]);

    const value = {user, loading, createUser, updateUser, signIn, signInWithGoogle, signInWithGithub, logOut}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;