import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState={
    user:JSON.parse(localStorage.getItem('user'))||null,
    token:JSON.parse(localStorage.getItem('token'))||null

}
const registeruser =createAsyncThunk('post/registeruser',async(req,res)=>{
     const res=
})

export const AuthSlice =createSlice({
    name:user,
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder.addCase()
        
    }

})