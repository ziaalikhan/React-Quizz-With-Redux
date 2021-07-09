import './App.css';
import { Provider } from 'react-redux';
import store from './store/index'
import Question from './component/Question'

function App() {
  return (
    <Provider store={store}>

    <div className="App">
    <Question/>
    </div>
    </Provider>
  );
}

export default App;