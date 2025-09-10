import {
  loginWithGithub,
  loginWithGoogle,
  logout,
} from './redux/features/auth/authAction';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import type { RootState } from './redux/store';

function App() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.auth);
  console.log(user?.displayName);

  return (
    <main>
      <h1 className="font-extrabold capitalize">
        {user ? user.displayName : 'HI'}
      </h1>
      <img src={user?.photoURL || '/userphoto.jpg'} alt="user photo" />

      <div className='space-x-2'>

      <button
        onClick={() => dispatch(loginWithGoogle())}
        className="capitalize font-semibold text-white bg-black rounded p-2 mt-10"
      >
        google
      </button>
      <button
        onClick={() => dispatch(loginWithGithub())}
        className="capitalize font-semibold text-white bg-black rounded p-2 mt-10"
      >
        github
      </button>
      <button
        onClick={() => dispatch(logout())}
        className="capitalize font-semibold text-white bg-black rounded p-2 mt-10"
      >
        logout
      </button>
      </div>
    </main>
  );
}

export default App;
