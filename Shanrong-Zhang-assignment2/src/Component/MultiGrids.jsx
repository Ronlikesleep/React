import SingleGrid from "./SingleGrid";
import "./../style.css"
import { ClassNameContext } from '../State/ClassNameProvider';
import { useContext } from "react";
export default function MultiGrids() {
    const [classNameList, setGridClassListName] = useContext(ClassNameContext);
    const gridList = [];
    for (let i = 0; i < 400; i++) {
        gridList.push(<SingleGrid className={classNameList[i]} id={i} key={i} />);
    }
    return (<div>
        <div className="grid-container">
            {gridList}
        </div>
    </div>
    )

}