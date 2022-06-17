import React from "react";
import logo from './logo.svg';
import { Link } from 'react-router-dom';

export class NotFound extends React.Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Sorry, no such component !
              </p>             
            </header>
            <div className="Home">
                <nav>
                    <span><Link to="/">🏠</Link></span>
                </nav>
            </div>
          </div>
        )
    }
}