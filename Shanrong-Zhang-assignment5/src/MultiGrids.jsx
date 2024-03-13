import SingleGrid from "./SingleGrid";
import "./style.css"
export default function MultiGrids() {
    const gridList = [];
    for (let i = 0; i < 4; i++) {
        gridList.push(<SingleGrid name={"grid-item-unClicked"} id={i} key={i} />);
    }
    return (<div>
        <div className="grid-container">
            {gridList}
        </div>
    </div>
    )

}