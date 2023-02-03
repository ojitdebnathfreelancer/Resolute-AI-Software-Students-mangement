import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app, { db } from '../firebase/firebase.init.config';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

export const ContextStudent = createContext();

const auth = getAuth(app);
const reference = collection(db, "students")

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [refresh, setRefresh] = useState(true);

    const userRegistations = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // user registation by email and password 

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    // user login with email and password 

    const userLogout = () => {
        return signOut(auth)
    };
    // sign out current user 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, []);
    // current user objervations 

    const addStudent = (student) => {
        return addDoc(reference, student)
    };
    // add student to FireStore 

    const getStudets = () => {
        return getDocs(reference)
    };
    // get all user from firestore 

    const updateStudent = (updatedDoc, id) => {
        const query = doc(db, 'students', id)
        return updateDoc(query, updatedDoc)
    };
    // update student information 

    const deleteStudent = (id) =>{
        const query = doc(db, 'students', id);
        return deleteDoc(query)
    };
    // delete student from fireStore 

    const data = { user, userRegistations, userLogin, userLogout, addStudent, getStudets, updateStudent, deleteStudent, refresh, setRefresh};
    return (
        <ContextStudent.Provider value={data}>
            {children}
        </ContextStudent.Provider>
    );
};

export default ContextProvider;