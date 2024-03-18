import React, { useEffect, useState, useContext } from 'react';
import { BlackGridCountContext } from "./BlackGridCountProvider";
import { ClassNameContext } from './ClassNameProvider';
export default function ShowCoundNumber() {
    const [BlackGridNumber, setBlackGridNumber] = useContext(BlackGridCountContext);
    const [classNameList, setGridClassListName] = useContext(ClassNameContext);
    useEffect(() => {
        const newBlackGridNumber = calculateBlackGridNumber(classNameList);
        console.log("it is" + newBlackGridNumber);
        setBlackGridNumber(newBlackGridNumber);
    }, [classNameList]);


    function calculateBlackGridNumber(list) {
        const clickedCount = list.filter(className => className === 'grid-item-Clicked').length;
        return clickedCount;
    }
    return (<h1>
        Current Living Cells:{BlackGridNumber}
    </h1>)
}