import { configureStore } from "@reduxjs/toolkit";
import userSlide from "./user/user.slice";


export const store = configureStore({
    reducer :{
        userSlide
    }
})