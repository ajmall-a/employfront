import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Emplist from './components/Emplist';
import Home from './components/Home';
import Empform from './components/Empform';


function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/list' element={<Emplist/>}/>
      <Route path='/form' element={<Empform/>}/>
     </Routes>
    </div>
  );
}

export default App;
