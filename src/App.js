import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/nav/Navbar";
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Resources from './components/Resources';
import Board from './components/Board';
import Register from './components/programs/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SocialMedia/>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={ <Home/> }/>
            <Route path='/about' element={ <About/> }/>    
            <Route path='/contact' element={ <Contact/> }/>  
            <Route path='/board' element={ <Board/> }/>  
            <Route path='/resources' element={ <Resources/> }/>    
            <Route path='/register' element={ <Register/> }/>    
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;