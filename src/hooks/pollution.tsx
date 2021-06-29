import React, { useState ,useEffect } from "react";
import {API_URL } from "../config/config" ;
import { getData } from "../util/api" ;
export default function usePollution() {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    function fetchData( params? : any ) {
        setLoading(true);
        getData( params ? params : {},( res : any  )=>{
            setLoading( false );
            setData( res? res : {} );
        });
    }
    return [{
        data ,
        isLoading
    }, fetchData];
}