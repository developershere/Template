import logo from './logo.svg';
import './App.css';
import Home from './components/Home/home';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/user/signup/signup';

function App() {
  return <>

  <Routes>
   <Route path='/' element={ <Home/>}/>
   <Route path='/signup' element={<SignUp/>}></Route>

  </Routes>
 
  </>
}

export default App;
