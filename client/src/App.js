
import './Css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomBar from './Components/General/BottomBar';
import Home from './Components/General/Home';
import NavBar from './Components/General/NavBar';
import UserPanel from './Components/Login/UserPanel';
import Objetive from './Components/Login/Objetive';

function App () {

   return (
      <BrowserRouter>
         <NavBar/>
         <div className="App">
            <Routes>
               <Route exact path='/' element={<Home />} />
               <Route exact path='/user' element={<UserPanel />} />
               <Route exact path='/user/objetive' element={<Objetive />} />
            </Routes>
         </div>
         <BottomBar/>
      </BrowserRouter>
   );
}

export default App;
