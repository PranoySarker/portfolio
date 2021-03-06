import logo from './logo.svg';
import './App.css';
import Header from './pages/shared/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import Footer from './pages/shared/Footer';
import Details from './pages/Details';
import Blog from './pages/Blog';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
