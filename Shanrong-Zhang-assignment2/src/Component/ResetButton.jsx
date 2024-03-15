import { useContext } from "react";
import { ClassNameContext } from '../State/ClassNameProvider';
import { BlackGridCountContext } from "../State/BlackGridCountProvider";
import * as React from 'react';
import Button from '@mui/material/Button';

export default function ResetButton() {
    const [BlackGridNumber, setBlackGridNumber] = useContext(BlackGridCountContext);
    const [classNameList, setGridClassListName] = useContext(ClassNameContext);
    function handleClick() {
        const ARRAYLENGTH = 20 * 20;
        const initialClassNames = new Array(ARRAYLENGTH).fill('grid-item-unClicked').map(() => {
            const randomNumber = Math.random();
            return randomNumber < 0.05 ? 'grid-item-Clicked' : 'grid-item-unClicked';
        });
        const clickedCount = initialClassNames.filter(className => className === 'grid-item-Clicked').length;
        setBlackGridNumber(clickedCount);
        setGridClassListName(initialClassNames);
    }
    return (
        <Button variant="contained" onClick={() => handleClick()}>Reset</Button>)

}