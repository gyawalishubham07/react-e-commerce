import { createAsyncThunk } from "@reduxjs/toolkit";
import {login, registered} from "../../api/auth/login"



const loginUser = createAsyncThunk("auth/login",async(data,{rejectWithValue})=>{
try {
    const response =  await login(data);
    // console.log(response.data);

  localStorage.setItem('authToken',response.data?.token);  // store user token in localstorage 

    return response.data;
} catch (error) {
    return rejectWithValue(error.response?.data)
}
})

const registerUser = createAsyncThunk("auth/register",async(data,{rejectWithValue})=>{
    try {
        const response =  await registered(data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
    })

export {loginUser, registerUser};