import React , {Component} from 'react'
import './App.css';
import ReactDOM from 'react-dom'
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import {BrowserRouter as Router, Route , Routes , } from 'react-router-dom'
import Home from './components/Home/Home';
class App extends Component {











  
  render(){
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/register" element={<RegisterForm/>} />
        </Routes>
     </Router>
    </div>
  );
}
}

export default App;
