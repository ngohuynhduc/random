import "./App.css";
import ButtonGroup from "./component/button/ButtonGroup";
import QuestionScreen from "./component/QuestionScreen";
import { useContext } from "react";
import { AppContext } from "./component/store/store";
import Title from "./component/Title";

function App() {
  const { isFetch } = useContext(AppContext);
  // console.log("Loading: ", isLoading);
  return (
    <div className="App">
      <div className="container">
        <Title />
        <ButtonGroup />
        {isFetch && <QuestionScreen />}
      </div>
    </div>
  );
}

export default App;
