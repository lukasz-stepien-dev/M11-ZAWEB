
import './App.css';
import Header from "./Header";
import PostList from "./PostList";
import Posts from "./Posts";

function App() {
  return (
    <div className="App">
      <Header />
        <section className={'posts'}>
            <PostList posts={Posts} />
        </section>
    </div>
  );
}

export default App;
