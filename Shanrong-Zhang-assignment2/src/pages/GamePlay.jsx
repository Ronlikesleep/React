import MultiGrids from '../Component/MultiGrids.jsx'
import ClassNameProvider from '../State/ClassNameProvider.jsx'
import ShowCoundNumber from '../State/ShowCountNumber';
import BlackGridCountProvider from '../State/BlackGridCountProvider.jsx';
import Buttons from '../Component/Buttons.jsx';
import Nav from './../Component/Nav'
export default function Gameplay() {
    return (<div>
        <Nav />
        <ClassNameProvider>
            <BlackGridCountProvider>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 0,
                    padding: 0,
                }}>
                    <ShowCoundNumber />
                </div>
                <MultiGrids />
            </BlackGridCountProvider>
        </ClassNameProvider>
    </div >);
}