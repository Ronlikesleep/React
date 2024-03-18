import SingleGrid from "./SingleGrid";
import "./../style.css"
import { ClassNameContext } from '../State/ClassNameProvider';
import { useContext } from "react";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Buttons from "./Buttons";
export default function MultiGrids() {
    const [classNameList, setGridClassListName] = useContext(ClassNameContext);
    const gridList = [];
    const ROWNUM = 20;
    const COLNUM = 20;
    const oneGridSize = 20;
    const width = COLNUM * oneGridSize;
    for (let i = 0; i < ROWNUM * COLNUM; i++) {
        gridList.push(<SingleGrid className={classNameList[i]} id={i} key={i} />);
    }
    return (<React.Fragment>
        <CssBaseline />
        <Container maxWidth="m" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        }}>
            <Box
                sx={{
                    display: 'grid',
                    width: `${width}px`,
                    gridTemplateColumns: `repeat(auto-fill, minmax(${oneGridSize}px, 1fr))`,
                    gridAutoRows: `${oneGridSize}px`,
                    '@media (max-width: 600px)': {
                        gridTemplateColumns: `repeat(auto-fill, ${oneGridSize * 0.7}px)`,
                        gridAutoRows: `${oneGridSize * 0.7}px`,
                        width: `${ROWNUM * oneGridSize * 0.7}px`,
                    }
                }}
            >
                {gridList}
            </Box>

        </Container>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px'
        }}><Buttons /></div>

    </React.Fragment>
    )

}