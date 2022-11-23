import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <h1><span className='qt'>"</span>React Axios<span className='qt'>"</span></h1>
        <Outlet />
      </div>
    </div>
  )
}

export default App
