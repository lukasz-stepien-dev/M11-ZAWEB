import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import BannerContent from "./content/BannerContent";
import Posts from "./components/Posts";
import PostContent from "./content/PostContent";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner bannerContent={BannerContent}/>
      <Posts postsContent={PostContent}/>
    </div>
  );
}

export default App;
