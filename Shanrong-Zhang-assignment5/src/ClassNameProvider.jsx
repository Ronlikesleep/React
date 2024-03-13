import { createContext } from "react";
import { useState } from "react";

export const ClassNameContext = createContext();
export default function ClassNameProvider(props) {

    const [classNameList, setGridClassListName] = useState(["grid-item-unClicked", "grid-item-unClicked", "grid-item-unClicked", "grid-item-unClicked"]);
    return (<ClassNameContext.Provider value={[classNameList, setGridClassListName]}>
        {props.children}
    </ClassNameContext.Provider>)
}