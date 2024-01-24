import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const countriesSlice = createSlice({
    name: 'countries',
    initialState: null,
    reducers: {
        setCountriesG: (states, action) => action.payload
    }
})

export const { setCountriesG } = countriesSlice.actions

export default countriesSlice.reducer

export const getCountriesThunk = (url) => (dispatch) =>  {
    axios.get(url)
    .then(res => dispatch(setCountriesG(res.data)))
    .catch(err => console.log(err))
}