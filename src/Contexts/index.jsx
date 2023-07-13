import { createContext, useState } from "react";
export const Context = createContext();

export function ContextProvider(props) {
    const [preferiti, setPreferiti] = useState([]);

    return (
        <Context.Provider value={{ preferiti, setPreferiti }}>
            {props.children}
        </Context.Provider>
    );
}

/*

*/
