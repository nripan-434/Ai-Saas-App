import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axios from 'axios'

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: JSON.parse(localStorage.getItem('token')) || null,
    status: 'success'

}
export const registeruser = createAsyncThunk('post/registeruser', async (form, { rejectWithValue }) => {
    try {
        const res = await axios.post('http://localhost:5000/user/register', form)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)

    }
})
export const login = createAsyncThunk('post/login',async(form,{rejectWithValue})=>{
        try {
            const res = await axios.post('http://localhost:5000/user/login',form)
        return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
})

export const AuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder.addCase(registeruser.pending, (state) => {
            state.status = 'pending'
        })
       .addCase(registeruser.fulfilled, (state, action) => {
            state.status = 'success'
            toast.success(action.payload.message)


        })
        .addCase(registeruser.rejected, (state, action) => {
            state.status = 'rejected'
            toast.error(action.payload.message)

        })
        .addCase(login.pending,(state)=>{
            state.status='pending'
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.status='pending'
            toast.success(action.payload.message)
            state.user=action.payload.user
            state.token=action.payload.token
        })
        .addCase(login.rejected,(state,action)=>{
            state.status='rejected'
            toast.error(action.payload.message)
        })

    }

})

export default AuthSlice.reducer