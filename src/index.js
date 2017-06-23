import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './navbar.js';
import Jumbotron from './jumbotron.js';
import Footer from './footer.js';
import Main from './main.js';

class App extends React.Component {
    render(){
        return (
          <div>
            <noscript>
              You need to enable JavaScript to run this app.
            </noscript>
            <Navbar />
            <div className="container">
              <Jumbotron />
              <div className="main" />
            </div>
            <Footer />
          </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

