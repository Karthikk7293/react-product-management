import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home'
import AddProductScreen from './Pages/AddProductScreen'
import ListProductScreen from './Pages/ListProductScreen'
import RemoveProductScreen from './Pages/RemoveProductScreen'

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/add-product' element={<AddProductScreen/>}/>
     <Route path='/list-product'element={<ListProductScreen/>}/>
     <Route path='/remove-product' element={<RemoveProductScreen/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
