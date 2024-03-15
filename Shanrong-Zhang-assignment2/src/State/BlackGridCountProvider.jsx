import { createContext } from "react";
import { useState, useContext } from "react";
import { ClassNameContext } from "./ClassNameProvider";
export const BlackGridCountContext = createContext();
export default function BlackGridCountProvider(props) {
    const [classNameList, setGridClassListName] = useContext(ClassNameContext);
    const clickedCount = classNameList.filter(className => className === 'grid-item-Clicked').length;
    const [BlackGridNumber, setBlackGridNumber] = useState(clickedCount);
    return (<BlackGridCountContext.Provider value={[BlackGridNumber, setBlackGridNumber]}>
        {props.children}
    </BlackGridCountContext.Provider>)
}