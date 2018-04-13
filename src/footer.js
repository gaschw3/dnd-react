import React from 'react';
import Scroll from 'react-scroll-to-element';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="navbar-fixed-bottom footer">
        <div className="container">
        <Scroll>
          <div className="col-sm-2 col-sm-offset-5 color--footer">
              <p className="text-center color--footer-text">Return to Top</p>
          </div>
        </Scroll>
        </div>
      </footer>
    );
  }
}

