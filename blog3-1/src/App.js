import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Post from "./components/Post/Post";
import PopUp from "./components/PopUp/PopUp";

function App() {
  return (
    <div className="App">
        <Header/>
        <div id={'complete-layout'}>
            <Layout text={'HEADLINE'}/>
            <PopUp text={'1'} left={10} top={10}/>
            <Layout text={'OPENING'} width={48} height={30}/>
            <PopUp text={'2'} left={8} top={90}/>
            <Layout text={'HALF-WIDTH IMAGE'} width={48} height={30}/>
            <PopUp text={'3'} left={25} top={90}/>
            <Layout text={'SUB-HEAD'}/>
            <PopUp text={'4'} left={10} top={230}/>
            <Layout text={'CONTENT'} height={20}/>
            <PopUp text={'5'} left={30} top={313}/>
            <Layout text={'CTA 1'} height={13}/>
            <PopUp text={'6'} left={10} top={400}/>
            <Layout text={'SUB-HEAD'}/>
            <PopUp text={'7'} left={25} top={470}/>
            <Layout text={'CONTENT'} height={20}/>
            <PopUp text={'8'} left={10} top={559}/>
            <Layout text={'CTA 2'} height={13}/>
            <PopUp text={'9'} left={30} top={649}/>
        </div>
        <div className={'posts'}>
            <Post header={'1. Goal = Grab Attention'} body={'Your headline gets read more than\n' +
                'anything else on your website. Thats' +
                'why your headline serves one goal:' +
                'grab attention so people feel' +
                'compelled to read your opening.'}/>
            <Post header={'2. Key Insight'} body={'When people make snap decisions' +
                'about text, they prefer fewer' +
                'characters per line (CPL). The half-' +
                'width image shortens the line length' +
                'of the opening-fewer CPL-thus' +
                'enticing people to read because it' +
                'caters to their preferences.'}/>
            <Post header={'3. Key Inisight'} body={'Direct marketers have long known' +
                'that if you get people to read your' +
                'first 3-4 sentences, they\'re more' +
                'likely to read your entire article' +
                'That said, the point of your opening' +
                'is to get people to read your' +
                'opening ... and that\'s it.'}/>
            <Post header={'4. Big Promise'} body={'This sub-headline has one main' +
                'goal ... to entice people to read your' +
                'first piece of content and that\'s it.' +
                'How? Make a promise to your' +
                'readers ... give them a benefit.'}/>
        </div>
        <div className={'flex'}>
            <Post header={'5. Connecting Emotionally'} body={'Your first piece of content should aim\n' +
                'to trigger an emotion in your reader.' +
                'When people get emotional, they pay' +
                'attention. They\'re also more likely to' +
                'take actions after being put into an' +
                'emotional state.'}/>
            <Post header={'6. The Soundbite'} body={'Use click to tweet "quote" right here.\n' +
                'Why? Who do people quote? People' +
                'quote authorities. Enticing people to' +
                'quote you positions you as an' +
                'authority. Plus, people like tweeting' +
                'quotes and you\'ll get more traffic' +
                'from social media as a result of it.'}/>
            <Post header={'7. Big Promise #2'} body={'Here\'s where you promise people' +
                'exactly what they\'ll learn ... the step-' +
                'by-step method ... the how to. You' +
                'already connected, now\'s the time' +
                'to get people to take action.'}/>
            <Post header={'8. The How To Section'} body={'Give people practical, easy to' +
                'implement advice. Get people results,' +
                'and they\'Il remember you forever.' +
                'Also practically useful content is' +
                'more viral than other types of content.'}/>
            <Post header={'9. Buy or Subscribe?'} body={'Here\'s where you close out your' +
                'article with another call to action.' +
                'You can include a "buy now" CTA' +
                'or a "subscribe." I often use subscribe.'}/>
        </div>
    </div>
  );
}

export default App;
