import { firebaseAuth } from "../../../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const loginRequest = ({ email, password }) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const registerRequest = ({ email, password }) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const loadUserRequest = (setUser) => {
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(user);
      return user;
      // ...
    } else {
      return null;
    }
  });
};

export const signOutRequest = () => {
  return signOut(firebaseAuth);
};
