import React from 'react';
import './top_realtors.css';
import { FaStar } from 'react-icons/fa';
import { FcFolder } from 'react-icons/fc';
import { ImPlus } from 'react-icons/im';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import topRealtors_image from '../../assets/realtor_image.png';
import apartment_img from '../../assets/apartment2.jpg';

export const TopRealtors = () => {
  return (
    <section id="topRealtors">
        <div className="topRealtors__header">
        <h2><i className="topRealtors__header-icon"><FaStar /></i>Activity For Today</h2>
        <div className="summury">
            <div className="summury__item">
                <FcFolder className="activity_summury-icon"/> 150<small className='text__small'> ads added</small>
            </div>
            <div className="summury__item">
                <ImPlus className="activity_summury-icon"/> 100<small className='text__small'> objects implemented</small>
            </div> 
            <button type="button" className="btn btn-small">pro</button>
        </div>
        
        </div>
      <div className="container topRealtors__container">
            <div className="topRealtors__item">
                <div className="topRealtors__item-details">
                    <h4>21:10</h4>
                    <div><img className="topRealtors__item-image realtor" src={topRealtors_image} alt="topRealtors"/>
                    <p>Parwiz</p></div>
                    <div><img className="topRealtors__item-image" src={apartment_img} alt="topRealtors"/>
                    <p>Sale 2ZKB, 40qm, in Berlin, Wedding</p></div>
                </div>
                <div>
                    $89.000,00
                </div> 
            </div>
            <div className="topRealtors__item">
                <div className="topRealtors__item-details">
                    <h4>21:10</h4>
                    <div><img className="topRealtors__item-image realtor" src={topRealtors_image} alt="topRealtors"/>
                    <p>Parwiz</p></div>
                    <div><img className="topRealtors__item-image" src={apartment_img} alt="topRealtors"/>
                    <p>Sale 2ZKB, 40qm, in Berlin, Wedding</p></div>
                    
                </div>
                <div>
                    $89.000,00
                </div> 
            </div>
            <div className="topRealtors__item">
                <div className="topRealtors__item-details">
                    <h4>21:10</h4>
                    <div><img className="topRealtors__item-image realtor" src={topRealtors_image} alt="topRealtors"/>
                    <p>Parwiz</p></div>
                    <div><img className="topRealtors__item-image" src={apartment_img} alt="topRealtors"/>
                    <p>Sale 2ZKB, 40qm, in Berlin, Wedding</p></div>
                </div>
                <div>
                    $89.000,00
                </div> 
            </div>
        </div>

        
    </section>
  )
}
