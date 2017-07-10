import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './navbar.js';
import Main from './main.js';

export default class App extends React.Component {
    render(){
        return (
          <div>
            <noscript>
              You need to enable JavaScript to run this app.
            </noscript>
            <Navbar />
            <Main />
          </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

