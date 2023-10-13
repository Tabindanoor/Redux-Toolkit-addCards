import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: [],
    },
    reducers: {
        addProduct:(state,action)=>{
            state.product.push(action.payload);
        },
        deleteProduct:(state,action)=>{
            // return state.filter((product) => product.id !== action.payload)

            // const updatedProducts = state.filter(product => product.id !== action.payload);
            // return { ...state, products: updatedProducts };

            state.product = state.product.filter(product => product.id !== action.payload);     

        },
    
      
    }
   
})

export default productSlice.reducer;
export const {addProduct, deleteProduct} = productSlice.actions;