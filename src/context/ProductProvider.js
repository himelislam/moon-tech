import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import pdata from "../products.json"
import { actionTypes } from '../state/ProductsStates/actionTypes';
import { initialState, productReducer } from '../state/ProductsStates/productReducer';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {
    const [data, setData] = useState({});

    const [state, dispatch] = useReducer( productReducer, initialState);

    const value = {
        state,
        dispatch,
    }
    useEffect(() => {
        dispatch({type : actionTypes.FETCHING_START});
        // setData(pdata);
        dispatch({type : actionTypes.FETCHING_SUCCESS, payload : pdata})
        console.log(state)
        //here will be added an error action in catch 
    }, [])
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );

};
export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}

export default ProductProvider;