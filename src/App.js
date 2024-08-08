import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import AlertContext from './context/notes/AlertContext';
import NoteState from './context/notes/noteState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <AlertContext>
        <NoteState>
        <Router>
          <Navbar/>
          <Alert/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </Router>
        </NoteState>
      </AlertContext>
    </>
  );
}

export default App;
