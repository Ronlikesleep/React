import MultiGrids from '../Component/MultiGrids.jsx'
import ClassNameProvider from '../State/ClassNameProvider.jsx'
import ShowCoundNumber from '../State/ShowCountNumber';
import BlackGridCountProvider from '../State/BlackGridCountProvider.jsx';
import Buttons from '../Component/Buttons.jsx';
import Nav from './../Component/Nav'
export default function Gameplay() {
    return (<div>
        <Nav/>
        <ClassNameProvider>
            <BlackGridCountProvider>
                <ShowCoundNumber />
                <MultiGrids />
                <Buttons />
            </BlackGridCountProvider>
        </ClassNameProvider>
    </div>);
}