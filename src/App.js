import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './pages/Home.page';
import NavBar from './components/NavBar.component';
import Footer from './components/Footer.component';
import AboutPage from './pages/About.page';
import EngagePage from './pages/Engage.page';
import ReviewPage from './pages/Review.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar title="First Project" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/engage" component={EngagePage} />
          <Route exact path="/review" component={ReviewPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
