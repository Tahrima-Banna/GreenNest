import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';


const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    const signInWithPandE=(email,password)=>{
       setLoading(true);
        return  signInWithEmailAndPassword(auth,email,password)
    }
      const signInWithEmail=()=>{
            setLoading(true);
        return  signInWithPopup(auth, googleProvider)
    }

    const updateProfileFunc=(displayName,photoURL)=>{

      return updateProfile(auth.currentUser,{
         displayName,
         photoURL,
      })
    }
      const signOutFnc=()=>{
        setLoading(true);
        return  signOut(auth)
    }
      const sendResetPassword=(email)=>{
        setLoading(true);
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
        updateProfileFunc,
        loading,
        setLoading
    };

    useEffect(()=>{
     const unsubcribed= onAuthStateChanged(auth, (currUser)=>{
  
        console.log(currUser);
        setUser(currUser);
        setLoading(false);
      });

      return ()=>{
        unsubcribed();
      }
      
    },[])

    onAuthStateChanged(auth, (currUser)=>{

      console.log(currUser);
      setUser(currUser);
    });
    onAuthStateChanged(auth, (currUser)=>{

      console.log(currUser);
      setUser(currUser);
    });
    onAuthStateChanged(auth, (currUser)=>{

      console.log(currUser);
      setUser(currUser);
    });
    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;