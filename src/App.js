import logo from './logo.svg';
import './App.css';
import Header from './pages/shared/Header';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <h1 className='text-3xl text-secondary text-center h-screen'>Welcome to my portfolio</h1>
    </div>
  );
}

export default App;
