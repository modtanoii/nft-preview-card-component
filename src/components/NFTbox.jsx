import React from 'react';
import Card from './Card';
import './NFTbox.css';
import NFTimg from'../images/image-equilibrium.jpg';
import OWNimg from '../images/image-avatar.png';
import ETHicon from '../images/icon-ethereum.svg';
import Clockicon from '../images/icon-clock.svg';
import Viewicon from '../images/icon-view.svg';


const NFTbox = () => {
  return (
    <Card>
        <div className="nft-image-box">
          <img src={NFTimg} alt="" className='nft-image'/>
        <div>
          <img src={Viewicon} alt=""/>
        </div>
        </div>

        <h2 className='title'><a href="/">Equilibrium #3429</a></h2>
        <p className='text'>Our Equilibrium collection promotes balance and calm.</p>

        <div className="nft-priceanddate">
            <div className="nft-price"><img src={ETHicon} alt="" width="11" height="18"/><p>0.041 ETH</p></div>
            <div className="nft-day-left"><img src={Clockicon} alt="" width="17" height="17"/><p>3 days left</p></div>
        </div>

        <div className="nft-owner">
            <div className="nft-avatar">
                <img src={OWNimg} alt="" />
            </div>
            <p className='nft-owner-name'>Creation of <a href="/">Jules Wyvern</a></p>
        </div>
    </Card>
  );
};

export default NFTbox;