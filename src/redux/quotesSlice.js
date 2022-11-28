import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchAllQuotes = createAsyncThunk("quotes/fetchAllQuotes", async() => {
  const res = await axios("https://www.breakingbadapi.com/api/quotes");
  return res.data;
})

export const quotesSlice = createSlice({
    name:"quotes",
    initialState:{
        items:[],
        status: "idle",
        error: null,
    },
    reducers:{},
    extraReducers:{
        [fetchAllQuotes.pending]:(state, action) =>{
            state.status = "loading"
        },
        [fetchAllQuotes.fulfilled]:(state, action) =>{
            state.items = action.payload;
            state.status = "succeeded";
        },
        [fetchAllQuotes.rejected]:(state, action) =>{
            state.status = "failed";
            state.error = action.error.message;
        }
    },
});

export default quotesSlice.reducer;