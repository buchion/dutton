import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/footer'

class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />

        <Footer />
      </div>
    );
  }

}

export default App;
