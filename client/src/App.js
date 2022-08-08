
import './Css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomBar from './Components/General/BottomBar';
import Home from './Components/General/Home';
import NavBar from './Components/General/NavBar';

function App () {

   return (
      <BrowserRouter>
         <NavBar/>
         <div className="App">
            <Routes>
               <Route exact path='/' element={<Home />} />
            </Routes>
         </div>
         <BottomBar/>
      </BrowserRouter>
   );
}

export default App;
