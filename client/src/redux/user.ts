'use client'
import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export interface UserState {
    isLogin: boolean,
}

const initialState : UserState = {
    isLogin: false,
}


export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsLogin: (state, action) => {
            state.isLogin = action.payload;
        },
        signIn: (state, action) => {
            axios.post("http://localhost:8000/auth/login", {...action.payload}).then((res) => {
                localStorage.setItem("accessToken", res.data.access_token);
            })
            state.isLogin = true;
        },
        signUp: (state, action) => {
            axios.post("http://localhost:8000/user", {...action.payload}).then((res) => {
                localStorage.setItem("accessToken", res.data.access_token);
            })
            state.isLogin = true;
            
        },
        logOut: (state ) => {
            localStorage.removeItem("accessToken");
            state.isLogin = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { signIn, signUp, setIsLogin, logOut } = user.actions
export default user.reducer