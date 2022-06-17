import React from "react";
import { ContactBook} from './components/ContactBook';
import { Link } from 'react-router-dom';

export class Contacts extends React.Component {
    render() {
        return (
            <div>
                <ContactBook/>
                <div className="Home">
                    <nav>
                        <span><Link to="/">🏠</Link></span>
                    </nav>
                </div>
            </div>
     )
    }
}