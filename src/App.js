import React from 'react';
import './App.css';
import HomePage from './pages/Home.page';
import NavBar from './components/NavBar.component';
import Footer from './components/Footer.component';

function App() {
  return (
    <div className="App">
      <NavBar title="First Project" />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
