import {configureStore} from "@reduxjs/toolkit";
import bannerPost from "./features/categorySlice";

export default configureStore({
    reducer:{
        bannerPost : bannerPost
    }
})