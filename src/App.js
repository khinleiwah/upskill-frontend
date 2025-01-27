import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './pages/Login';
import Shops from './pages/Shops';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/product/details/:slug' element={<Details/>} /> 
      <Route path='/login' element={<Login/>} />
      <Route path='/startSelling' element={<AddProduct/>} />
    
      <Route path='/product?' element={<Shops/>} />
      <Route path='/product/search?' element={<Shops/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
