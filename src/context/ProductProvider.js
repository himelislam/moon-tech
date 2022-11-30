import React, { createContext, useContext, useEffect, useState } from 'react';
import pdata from "../products.json"

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {
    const [data, setData] = useState({});

    const value = {
        data,
    }

    useEffect(() => {
        setData(pdata);
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