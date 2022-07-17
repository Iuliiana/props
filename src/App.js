import './App.css';

import {Routes, Route} from 'react-router-dom';
import {Listingpage} from "./pages/Listingpage";
import {Filmspage} from "./pages/Filmspage";
import {Homepage} from "./pages/Homepage";
import {Notfoundpage} from "./pages/Notfoundpage";
import {Layout} from "./components/Layout";

function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path='films' element={<Filmspage/>}/>
                <Route path='listing' element={<Listingpage/>}/>
                <Route path='*' element={<Notfoundpage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
