import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface userState {
  user: null | {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
  };

  loading: boolean;
}

const initialState: userState = {
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userState['user']>) => {
      state.user = action.payload;
    },

    clearUser: (state) => {
      state.user = null;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, clearUser, setLoading } = authSlice.actions;

export default authSlice.reducer;
