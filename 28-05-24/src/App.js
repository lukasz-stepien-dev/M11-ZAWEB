import React from 'react';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import content from './content.json';
import './App.css';

const App = () => {
  return (
      <div className="App">
        <Header title={content.header.title} images={content.header.images} />
        <nav>
          <a href="#aboutUs">O nas</a>
          <a href="#contact">Kontakt</a>
        </nav>
        <ContentSection title={content.aboutUs.title} text={content.aboutUs.text} />
        <ContentSection title={content.services.title} items={content.services.items} />
        <ContentSection title={content.features.title} text={content.features.text} />
        <Footer text={content.footer.text} />
      </div>
  );
};

export default App;
