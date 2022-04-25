import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import MENU from "./menu";


function App() {
    return (
        <div className="App">
            <Header menuItems={MENU}/>
            <Outlet/>
        </div>
    )
}

export default App;
