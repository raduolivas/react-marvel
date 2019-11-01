import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (
    email: string,
    password: string
) => auth.createUserWithEmailAndPassword(email, password);


export const doSignInWithEmailAndPassword = (email: string, password: string) => 
    auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () => auth.signOut();
