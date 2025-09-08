import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "../redux/features/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { auth } from "../firebae/firebase.config";

const AuthListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null;
};

export default AuthListener;
