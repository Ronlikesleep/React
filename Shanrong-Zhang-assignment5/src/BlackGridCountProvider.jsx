import { createContext } from "react";
import { useState } from "react";

export const BlackGridCountContext = createContext();
export default function BlackGridCountProvider(props) {
    const [BlackGridNumber, setBlackGridNumber] = useState(0);
    return (<BlackGridCountContext.Provider value={[BlackGridNumber, setBlackGridNumber]}>
        {props.children}
    </BlackGridCountContext.Provider>)
}