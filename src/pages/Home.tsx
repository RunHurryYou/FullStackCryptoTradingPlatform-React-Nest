import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';
import arrow from '../img/button-home-arrow.svg';
import note from '../img/note.png';
import MarketTrendCard from '../components/MarketTrendCards';
import SimpleStep from '../components/SimpleStep'

const Home: React.FC = () => {
  return (
    <>
    <Header></Header>
    <main>
      <div className="home-header">
      <div className="home-header-text">
        <div className='home-header-title'>
          <div className="home-header-title-line"></div>
          <p>Crypto Brains</p> 
        </div>
        <h1>Buy & Sell Crypto Easy With Crypto Brains</h1>
        <div className="home-header-line"></div>
        <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h2>
        <div className="home-header-buttons">
          <a href="" className='home-header-firstbutton'>
            Start Now
            <img src={arrow} alt="icon_bitton" />
          </a>
          <a href="" className="home-header-secondbutton">
          Beginner’s Guide
          </a>
        </div>
      </div>
      <img src={note} alt="note" className="note" />
      </div>
      <div className='market-trends'>
        <div className="market-trends-container">
          <div className="market-trends-header">
          <h2 className='market-trends-title'>Market Trends</h2>
          <div className='market-trends-filters'>
            <div className="market-trends-filter">All</div>
            <div className="market-trends-filter">Top Gainers</div>
            <div className="market-trends-filter">Top Losers</div>
            <div className="market-trends-filter">New Listing</div>
            <div className="market-trends-filter">Defi</div>
            <div className="market-trends-filter">Metaverse</div>
          </div>
          </div>
          <div className="footer-line"></div>
          <div className="market-trends-cards">
            <MarketTrendCard valute="bitcoin" currency="usd" name="Bitcoin"></MarketTrendCard>
            <MarketTrendCard valute="bitshares" currency="usd" name="BTS"></MarketTrendCard>
            <MarketTrendCard valute="komodo" currency="usd" name="KMD"></MarketTrendCard>
            <MarketTrendCard valute="ethos-2" currency="usd" name="Ethos"></MarketTrendCard>
            <MarketTrendCard valute="metaverse-etp" currency="usd" name="ETP"></MarketTrendCard>
          </div>
        </div> 
        <a href='' className='all-market-button'>
            See All Market
            <img src={arrow} alt="all-market-button" />
          </a>
      </div>

      <div className="simple-step">
        <div className="simple-step-container">
          <h1 className='simple-steps-title'>
            Start Trading In Simple Process
          </h1>
          <h2 className="simple-steps-describe">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </h2>
          <div className="footer-line"></div>
          <div className='simple-step-cards'>
            <SimpleStep title='Create Account' describe='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' btn='Sign Up Now'></SimpleStep> 
            <SimpleStep title='Verify Bank Account' describe='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' btn='Verify Now'></SimpleStep> 
            <SimpleStep title='Add Fund in Wallet' describe='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' btn='Add Now'></SimpleStep> 
            <SimpleStep title='Start Trading' describe='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' btn='Start Now'></SimpleStep> 
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
    </>
  );
};

export default Home;
