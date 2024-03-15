import { useContext } from "react";
import { BlackGridCountContext } from "./BlackGridCountProvider";
export default function ShowCoundNumber() {
    const [BlackGridNumber, setBlackGridNumber] = useContext(BlackGridCountContext);
    return (<h1>
        Current Living Cells:{BlackGridNumber}
    </h1>)
}