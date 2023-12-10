import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
      <>
        <Header />
          <Menu />
          <MainContent />
          <Sidebar/>
          <Footer />
      </>
  );
}

export default App;
