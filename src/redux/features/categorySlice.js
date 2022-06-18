import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    name: "products",
    initialState:{
      data:[]
    },

    reducers:{
        setProducts(state, action){
          state.data = action.payload
        }
    }
});
export const {setProducts} = categorySlice.actions
export default categorySlice.reducer;


export const fetchProducts = createAsyncThunk("post/bannerPost",async () => {
    return fetch(`https://nailsa2z.com:5027/api/v1/banner/get_all_banner`, {
      method: "POST",
      headers:{
        "accept": "application/json",
        "content-type": "application/json"
      },
      
    }).then((res) => res.json());
  }
  );