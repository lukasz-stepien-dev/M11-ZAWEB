import './App.css';
import Header from './components/Header';
import Recommended from "./components/Recommended";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
        <Header />
        <Recommended />
        <AboutUs />
    </div>
  );
}

export default App;
