import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';


const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null);

    const createUser=(email,password)=>{

        return  createUserWithEmailAndPassword(auth,email,password)
    }

    const signInWithPandE=(email,password)=>{
        return  signInWithEmailAndPassword(auth,email,password)
    }
      const signInWithEmail=()=>{
        return  signInWithPopup(auth, googleProvider)
    }

    const updateProfileFunc=(displayName,photoURL)=>{

      return updateProfile(auth.currentUser,{
         displayName,
         photoURL,
      })
    }
      const signOutFnc=()=>{
        return  signOut(auth)
    }
      const sendResetPassword=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    const authInfo={
       
        createUser,
        signInWithPandE,
        signInWithEmail,
        signOutFnc,
        sendResetPassword,
         user,
        setUser,
        updateProfileFunc
    };

    onAuthStateChanged(auth, (currUser)=>{

      console.log(currUser);
      setUser(currUser);
    });
    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;