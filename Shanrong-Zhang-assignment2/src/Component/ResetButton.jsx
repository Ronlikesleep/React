import { useContext } from "react";
import { ClassNameContext } from '../State/ClassNameProvider';
import { BlackGridCountContext } from "../State/BlackGridCountProvider";
import * as React from 'react';
import Button from '@mui/material/Button';

export default function ResetButton() {
    const [BlackGridNumber, setBlackGridNumber] = useContext(BlackGridCountContext);
    const [classNameList, setGridClassListName] = useContext(ClassNameContext);
    function handleClick() {
        const direction = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [1, -1], [1, 0], [1, 1]];
        const ROWNUM = 20;
        const COLNUM = 20;
        const ARRAYLENGTH = ROWNUM * COLNUM;
        const SURVIVERATE = 0.05 + Math.random() * (0.1 - 0.05);
        const SURVIVENUM = Math.floor(ARRAYLENGTH * SURVIVERATE);
        const CENTER_X = 10;
        const CENTER_Y = 10;
        const initialClassNames = new Array(ARRAYLENGTH).fill('grid-item-unClicked');
        const queue = [];
        queue.push([CENTER_X, CENTER_Y]);
        let currentLiveNum = 0;
        const visit = new Array(ARRAYLENGTH).fill(0);
        while (queue.length != 0 && SURVIVENUM - currentLiveNum != 0) {
            let len = queue.length;
            while (len != 0) {
                let currentXY = queue.shift();
                len--;
                let randomNum = Math.random();
                if (randomNum <= (SURVIVENUM - currentLiveNum) / SURVIVENUM) {
                    initialClassNames[currentXY[0] * ROWNUM + currentXY[1]] = 'grid-item-Clicked';
                    currentLiveNum++;
                }
                for (let i = 0; i < direction.length; i++) {
                    let newX = currentXY[0] + direction[i][0];
                    let newY = currentXY[1] + direction[i][1];
                    if (newX >= 0 && newX <= ROWNUM - 1 && newY >= 0 && newY <= COLNUM - 1 && visit[newX * COLNUM + newY] === 0) {
                        queue.push([newX, newY]);
                        visit[newX * COLNUM + newY] = 1;
                    }
                }
            }

        }
        const clickedCount = initialClassNames.filter(className => className === 'grid-item-Clicked').length;
        setBlackGridNumber(clickedCount);
        setGridClassListName(initialClassNames);
    }
    return (
        <Button variant="contained" onClick={() => handleClick()}>Reset</Button>)

}