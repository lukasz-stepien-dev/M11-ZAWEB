import './App.css';
import Header from './components/Header';
import Recommended from "./components/Recommended";
import AboutUs from "./components/AboutUs";
import Form from "./components/Form";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
        <Header />
        <Recommended />
        <AboutUs />
        <section className={'userForm'}>
            <Form />
            <Info />
        </section>
    </div>
  );
}

export default App;
