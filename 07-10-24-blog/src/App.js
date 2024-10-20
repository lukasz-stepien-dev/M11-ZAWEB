import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/Blogs/Blogs";
import BlogsContent from "./content/BlogsContent";
import BlogsIT from "./components/BlogsIT/BlogsIT";
import BlogsITContent from "./content/BlogsITContent";

function App() {
  return (
    <div className="App">
        <section className="content">
            <section className="blogim">
            <Header />
            <Blogs blogs={BlogsContent} />
                <BlogsIT blogsIT={BlogsITContent} />
            <Footer /></section>
        </section>
    </div>
  );
}

export default App;
