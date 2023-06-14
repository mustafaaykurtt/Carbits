import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../../../api/apiCalls";




const initialState = {
    username: undefined,
    mail: undefined,
    image: undefined,
    password: undefined,
    isLoggedIn: false,
    errors: {}
};

export const loginHandler = createAsyncThunk('loginHandler', async (credentials, { rejectWithValue }) => {
    try {
        const response = await login(credentials);
        const authState = {
            ...response.data.user,
            password: credentials.password,
        };
        return authState;
    } catch (err) {
        return rejectWithValue(err.response.data.message);
    }
}
);

export const signUpHandler = createAsyncThunk('signUpHandler', async (user, { rejectWithValue }) => {
    try {
        const response = await signup(user);
        return response;
    } catch (err) {
        return rejectWithValue(err.response.data.validationErrors);
    }
})



export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
    },
    //  extraReducers:(builder) => {
    //     builder.addCase(signUpHandler.rejected, (state, action) => {
    //         console.log(action.payload);
    //         state.errors = action.payload;
    //     });
    // }
})

export const {setErrors} = userSlice.actions;
export default userSlice.reducer;