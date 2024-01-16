import './App.css';
import Header from "./Header/Header";
import Desc from "./Desc/Desc";
import Section from "./Section/Section";
import rupee from './Section/icons/icons8-rupee-100.png';
import webBlocked from './Section/icons/icons8-chip-card-blocked-80.png';
import podcast from './Section/icons/icons8-podcast-100.png';
import lightBulb from './Section/icons/icons8-lightbulb-64.png';
import monitor from './Section/icons/icons8-heart-monitor-100.png';

function App() {
  return (
    <div className="App">
        <Header/>
        <Desc/>
        <section className={'flex-evenly'}>
            <Section icon={rupee} header={'Physical expansion'} body={'' +
                'Buying or leasing additional' +
                'office space, paying expenses' +
                'for advertising and brokerage.'}/>
            <Section icon={podcast} header={'Hiring new staff'} body={'' +
                'Buying or leasing additional' +
                'office space, paying expenses' +
                'for advertising and brokerage.'}/>
        </section>
        <section className={'flex-evenly'}>
            <Section icon={monitor} header={'Upgrading equipment and machinery'} body={'' +
                'Buying or leasing additional' +
                'office space, paying expenses' +
                'for advertising and brokerage.'}/>
            <Section icon={lightBulb} header={'Going for Research and Development'} body={'' +
                'Buying or leasing additional' +
                'office space, paying expenses' +
                'for advertising and brokerage.'}/>
        </section>
        <section>
            <Section  icon={webBlocked} header={'Buying inventory'} body={'' +
                'Buying or leasing additional' +
                'office space, paying expenses' +
                'for advertising and brokerage.'}/>
        </section>
    </div>
  );
}

export default App;
