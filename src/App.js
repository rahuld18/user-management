
import './App.css';
import React from 'react';
import List from './components/list';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  
  render(){
  return (
    <Router>
   <Routes>
          <Route path="/" element={<List/>} />
    
     </Routes>
     </Router>
  );
}
}

export default App;
