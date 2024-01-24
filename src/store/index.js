import { configureStore } from "@reduxjs/toolkit";
import countries from './state/countries.state'

export default configureStore({
reducer: {
        countries
    }
})