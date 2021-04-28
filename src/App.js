import React, {useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import Cursor from './Components/CustomCursor/Cursor';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <Cursor />
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/skills" exact component={Skills}></Route>
        <Route path="/work" exact component={Work}></Route>
        <Route path="/contact" exact component={Contact}></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
