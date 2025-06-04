import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Main from './pages/Main';
import Page1 from './pages/Page1';

import './App.css';

function App() {
  return (
    <div>
      <Router>
          <Header />
        <Routes>
          <Route exact path='/' Component={Main}/>
          <Route exact path='/page1' Component={Page1}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
