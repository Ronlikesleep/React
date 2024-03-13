import React, { useContext } from 'react'
import './style.css';
import { useState } from 'react';
import { ClassNameContext } from './ClassNameProvider';
import { BlackGridCountContext } from './BlackGridCountProvider';
export default function SingleGrid(props) {

    const [gridClassName, setGridClassName] = useState('grid-item-unClicked');
    const [classNameList, setGridClassListName] = useContext(ClassNameContext);
    const [BlackGridNumber, setBlackGridNumber] = useContext(BlackGridCountContext);
    function handleClick() {
        const id = props.id;
        const newList = [...classNameList];
        if (classNameList[id] === 'grid-item-unClicked') {
            setGridClassName("grid-item-Clicked");
            setBlackGridNumber(BlackGridNumber+1);
            newList[id] = "grid-item-Clicked";
        } else {
            setGridClassName("grid-item-unClicked");
            setBlackGridNumber(BlackGridNumber-1);
            newList[id] = "grid-item-unClicked";
        }
        setGridClassListName(newList);
    }
    return (<div className={gridClassName} onClick={handleClick}>
    </div>)
}