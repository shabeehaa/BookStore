import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Reg from './components/Reg';
import Login from './components/Login';
// import Home from './components/Home';
import Middle from './components/Middle';
import Form from './components/Form';
import Viewcategory from './components/Viewcategory';
import Addbook from './components/Addbook';

import Singlebook from './components/Singlebook';
import Updatebook from './components/Updatebook';
import Userbookinfo from './components/Userbookinfo';
import Bookde from './components/Bookde';
// import Viewcateg from './components/Viewcateg';

function App() {
  return (
  <>
  
  <BrowserRouter>
<Routes>
<Route path="/" element={<Login/>}></Route>
<Route path="/reg" element={<Reg/>}></Route>
<Route path="/middle" element={<Middle/>}></Route>
<Route path="/addcategory" element={<Form/>}></Route>
<Route path="/viewcategory" element={<Viewcategory/>}></Route>
<Route path="/addbook" element={<Addbook/>}></Route>
{/* <Route path="/viewbook" element={<Viewbook/>}></Route> */}
<Route path="/viewbook" element={<Bookde/>}></Route>
<Route path="/singlebook/:id" element={<Singlebook/>}></Route>
<Route path="/updatebook" element={<Updatebook/>}></Route>
<Route path="/userbookinfo" element={<Userbookinfo/>}></Route>
{/* <Route path="/viewcategory" element={<Viewcateg/>}></Route> */}




</Routes>




  </BrowserRouter>
  
  </>
  );
}

export default App;
