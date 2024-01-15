import './App.css';
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

function App() {
  return (
    <div id={'wrapper'}>
      <Header/>
      <Aside/>
      <Main/>
    </div>
  );
}

export default App;
