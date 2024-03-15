import { createContext } from "react";
import { useState } from "react";

export const ClassNameContext = createContext();
export default function ClassNameProvider(props) {
    const ARRAYLENGTH = 20 * 20;
    const initialClassNames = new Array(ARRAYLENGTH).fill('grid-item-unClicked').map(() => {
        const randomNumber = Math.random();
        return randomNumber < 0.05 ? 'grid-item-Clicked' : 'grid-item-unClicked';
    });
    const [classNameList, setGridClassListName] = useState(initialClassNames);
    return (<ClassNameContext.Provider value={[classNameList, setGridClassListName]}>
        {props.children}
    </ClassNameContext.Provider>)
}