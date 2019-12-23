import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/Home.page';
import NavBar from './components/NavBar.component';
import Footer from './components/Footer.component';
import AboutPage from './pages/About.page';
import EngagePage from './pages/Engage.page';

function App() {
  return (
    <div className="App">
      <NavBar title="First Project" />
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/engage" component={EngagePage} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
