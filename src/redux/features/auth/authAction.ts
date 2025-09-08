import {
  auth,
  githubProvider,
  googleProvider,
} from '../../../firebase/firebase.config';
import { setUser, clearUser, setLoading } from './authSlice';
import { signInWithPopup, signOut } from 'firebase/auth';
import type { AppDispatch } from '../../store';

export const loginWithGoogle = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    dispatch(
      setUser({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      })
    );
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const loginWithGithub = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const result = await signInWithPopup(auth, githubProvider);
    const user = result.user;
    dispatch(
      setUser({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      })
    );
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  await signOut(auth);
  dispatch(clearUser());
};
