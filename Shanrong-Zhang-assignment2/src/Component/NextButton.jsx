import { ClassNameContext } from '../State/ClassNameProvider';
import { BlackGridCountContext } from "../State/BlackGridCountProvider";
import * as React from 'react';
import Button from '@mui/material/Button';
import { useContext } from 'react';

export default function NextButton() {
    const [BlackGridNumber, setBlackGridNumber] = useContext(BlackGridCountContext);
    const [classNameList, setGridClassListName] = useContext(ClassNameContext);
    const ROWNUM = 20;
    const COLNUM = 20;
    const direction = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [1, -1], [1, 0], [1, 1]];
    const tempList = [...classNameList];
    let tempNum = BlackGridNumber;
    function handleClick() {
        for (let i = 0; i < ROWNUM * COLNUM; i++) {
            let numOfNeiborChecked = 0;
            let x = Math.floor(i / ROWNUM);
            let y = Math.floor(i % COLNUM);
            for (let j = 0; j < direction.length; j++) {
                let newX = x + direction[j][0];
                let newY = y + direction[j][1];
                if (newX >= 0 && newX <= ROWNUM - 1 && newY >= 0 && newY <= COLNUM - 1 && classNameList[newX * COLNUM + newY] === 'grid-item-Clicked') {
                    numOfNeiborChecked++;
                }
            }

            if (classNameList[x * COLNUM + y] === 'grid-item-Clicked') {
                if (numOfNeiborChecked < 2) {
                    tempList[i] = 'grid-item-unClicked';
                    tempNum--;
                } else if (numOfNeiborChecked <= 3) {
                    continue;
                } else {
                    tempList[i] = 'grid-item-unClicked';
                    tempNum--;
                }
            } else {
                if (numOfNeiborChecked === 3) {
                    tempList[i] = 'grid-item-Clicked';
                    tempNum++;
                }
            }
        }
        setBlackGridNumber(tempNum);
        setGridClassListName(tempList);
    }
    return (
            <Button variant="contained" onClick={() => handleClick()}>Next</Button>

    );


}