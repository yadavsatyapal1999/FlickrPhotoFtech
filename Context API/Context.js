import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
const APICONTEXT = React.createContext();



const Provider = (props) => {

    const [searchWord, SetsearchWord] = useState("Nature")
console.log(searchWord)
    return <APICONTEXT.Provider value={{ searchWord, SetsearchWord }} >
        {props.children}
    </APICONTEXT.Provider>
}

export { APICONTEXT, Provider }