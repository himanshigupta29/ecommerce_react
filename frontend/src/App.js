import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import Products from './components/Products';
import Navbar from './components/Navbar';


function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Navbar />
      <Products/>
    </div>
    </Provider>
  );
}

export default App;
