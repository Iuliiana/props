import './App.css';

import {Routes, Route} from 'react-router-dom';
import {Listing} from "./pages/Listing";
import {Films} from "./pages/Films";
import {Homepage} from "./pages/Homepage";
import {Notfoundpage} from "./pages/Notfoundpage";
import {Layout} from "./components/Layout";

function App() {

  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='films' element={<Films/>}/>
          <Route path='listing' element={<Listing/>}/>
          <Route path='*' element={<Notfoundpage/>}/>
        </Route>
      </Routes>
  );
}

export default App;
