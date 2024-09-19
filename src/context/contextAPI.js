import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromAPI } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResults] = useState([]);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories)
    }, [selectCategories])

    // const fetchSelectedCategoryData = (query) => {
    //     setLoading(true);
    //     fetchDataFromAPI(`search/?q=${query}`).then(({ contents }) => {
    //         console.log(contents);
    //         setSearchResults(contents);
    //         setLoading(false);
    //     });
    // };

    const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromAPI(`search/?q=${query}`).then((data) => {
        if (data && data.contents) {
            console.log(data.contents);
            setSearchResults(data.contents);
        } else {
            console.log("No contents found or invalid response");
            alert('Unable to fetch data. Please check your API usage quota or try again later.');
            setSearchResults([]);
        }
        setLoading(false);
    }).catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
    });
};
    return (
        <Context.Provider value={{
            loading, 
            setLoading, 
            searchResult, 
            setSearchResults, 
            selectCategories, 
            setSelectCategories,
            setSearchResults, 
            mobileMenu, setMobileMenu

        }}  >
            {props.children}
        </Context.Provider>
    )
}
