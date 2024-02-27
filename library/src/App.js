import './App.css';
import Header from './components/Header';
import Recommended from "./components/Recommended";
import AboutUs from "./components/AboutUs";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
        <Header />
        <Recommended />
        <AboutUs />
        <Form />
    </div>
  );
}

export default App;
