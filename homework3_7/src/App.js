import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Todo } from './TodoModule/Todo';
import { Contacts } from './Contacts/Contacts';
import { NotFound } from './NotFound';
import contacts from './img/contacts.jpg';
import todos from './img/todos.jpg';

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact>
        <div className="homePage">
          <h1 className="homePageLabel">Home Page</h1>
          <div className="routsContainer">
            <div className="routsCard">
              <nav className="navElement">
                  <span><Link to="/contacts">Contacts</Link></span>
                </nav>
                <div className='routsDescription'>Contact books with possibilities to search, edit and remove contacts</div>
              <div className="cardImg">
                <img src={contacts} className="App-img" alt="Contacts" />
              </div>               
            </div>
            <div className="routsCard">
              <nav className="navElement">
                  <span><Link to="/todos">Todo</Link></span>
              </nav>
              <div className='routsDescription'>Todo application, where you can track you unfinished tasks</div>
              <div className="cardImg">
                <img src={todos} className="App-img" alt="Todos" />
              </div>
            </div>
          </div>
        </div>
      </Route>
      <Route path='/contacts' component={Contacts} />
      <Route path='/todos' component={Todo} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
  );
}

export default App;
