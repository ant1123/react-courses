import './App.css';
import { SchoolITComponent } from './schoolIT';
import { Provider } from 'react-redux';
import { store } from './schoolIT/store';

function App() {
  return (
    <Provider store={store} className="App">
      <div className="content">
        <SchoolITComponent/>
      </div>
    </Provider>
  );
}

export default App;
