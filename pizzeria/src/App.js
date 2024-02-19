import './App.css';
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Offer from "./components/Offer";
import Delivery from "./components/Delivery";

function App() {
  return <div className={'wrapper'}>
    <Header/>
    <Aside/>
    <Main/>
    <Offer/>
    <Delivery/>
  </div>
}

export default App;
