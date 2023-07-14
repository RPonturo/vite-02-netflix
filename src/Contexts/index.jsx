import { createContext, useState } from "react";
export const Context = createContext();

export function ContextProvider(props) {
    const [idPreferiti, setIdPreferiti] = useState([]);

    return (
        <Context.Provider value={{ idPreferiti, setIdPreferiti }}>
            {props.children}
        </Context.Provider>
    );
}

/*

*/
