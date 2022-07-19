import './App.css';
import ButtonGroup from './component/button/ButtonGroup';
import QuestionScreen from './component/QuestionScreen';
import { useContext } from 'react';
import { AppContext } from './component/store/store';

function App() {
  const { isLoading } = useContext(AppContext);
  console.log('Loading: ', isLoading);
  return (
    <div className='App'>
      <div className='container'>
        <ButtonGroup />
        <QuestionScreen />
      </div>
    </div>
  );
}

export default App;
