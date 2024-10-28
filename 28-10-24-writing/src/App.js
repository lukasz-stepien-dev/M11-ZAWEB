import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Post from "./components/post/Post";
import Content from "./Content";

function App() {
  return (
    <div className="App">
      <Header />
        <Post posts={Content} />

        <Footer />
    </div>
  );
}

export default App;
