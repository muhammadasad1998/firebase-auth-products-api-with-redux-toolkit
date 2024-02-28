import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    loading: true,
    data: [],
    data_by_id: null,
    detail_pro_loading: true
};

const Products_slice = createSlice({
    name: "products",
    initialState: initial_state,
    reducers:{
        set_products_data: (state, actions) => {
            const {payload} = actions;
            state.data = payload;
            state.loading = false;
        },
        set_product_details:(state, actions) => {
            const {payload} = actions;
            state.data_by_id = payload;
            state.detail_pro_loading = false;
        },
    },
})

export const { set_products_data, set_product_details} = Products_slice.actions;

export default Products_slice.reducer