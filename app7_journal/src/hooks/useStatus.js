import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";

export const useStatus = () => {
  const {status} = useSelector( state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async(user) => {
      const {uid, email, displayName, photoURL} = user;
      if (user) {
        return dispatch(login({uid, email, displayName, photoURL}));
      }
      else {
        return dispatch(logout());
      }
    }); // Se lanza cuando el status del usuario cambia
  }, [])

  return status;
  
}