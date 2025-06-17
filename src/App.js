import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Main from './pages/Main';
import Page1 from './pages/Page1';
import Page404 from './pages/404';
import Counter from './containers/Counter'

import './App.css';

function App() {
  return (
    <div>
      <Router>
          <Header />
        <Routes>
          <Route exact path='/' Component={Counter}/>
          <Route exact path='/page1' Component={Main}/>
          <Route exact path='/404' Component={Page404}/>
          <Route
              path="*"
              element={<Navigate to="/404" replace />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
