import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from './home/main';
import Login from './login/page';
import Movies from './movies/movie';
import Feedback from './feedback/feedbacks';
import Register from './login/register';
// import Addanime from './addanime';
import Addproduct from './addproduct';
import Shopnew from './home/main2';



// import Naav from './home/navbar';
function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Main />}></Route> */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/feedbacks' element={<Feedback />}></Route>
        {/* <Route path='/addanime' element={<Addanime />}></Route> */}
        <Route path='/addproduct' element={<Addproduct />}></Route>
        <Route path='/' element={<Shopnew />}></Route>
      </Routes>
     </BrowserRouter>
     
    
    </div>
  );
}
export default App;