import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        addProduct:(state,action)=>{
            state.push(action.payload);
        },
        deleteProduct:(state,action)=>{
            //            console.log("delete action");
            return state.filter((product) => product.id !== action.payload)

        }
    }
   
})

export default productSlice.reducer;
export const {addProduct, deleteProduct} = productSlice.actions;