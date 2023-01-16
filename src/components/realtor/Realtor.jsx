import React from 'react';
import './realtor.css';
import { GiTrophyCup } from 'react-icons/gi';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import realtor_image from '../../assets/realtor_image.png';

export const Realtor = () => {
  return (
    <section id="realtor">
        <div className="realtor__header">
        <h2><i className="realtor__header-icon"><GiTrophyCup /></i>Top Reals in Germany</h2>
        <button type="button" className="btn btn-primary">See All</button>
        </div>
      <div className="container realtor__container">
        <div className="realstate__item">
            <BsFillPatchCheckFill className="realtor__item-icon" />
            <img className="realstate__item-image" src={realtor_image} alt="realtor"/>
            <h3>Parwiz</h3>
        </div>
        <div className="realstate__item">
            <BsFillPatchCheckFill className="realtor__item-icon" />
            <img className="realstate__item-image" src={realtor_image} alt="realtor"/>
            <h3>Parwiz</h3>
        </div>
        <div className="realstate__item">
            <BsFillPatchCheckFill className="realtor__item-icon" />
            <img className="realstate__item-image" src={realtor_image} alt="realtor"/>
            <h3>Parwiz</h3>
        </div>
        <div className="realstate__item">
            <BsFillPatchCheckFill className="realtor__item-icon" />
            <img className="realstate__item-image" src={realtor_image} alt="realtor"/>
            <h3>Parwiz</h3>
        </div>
        <div className="realstate__item">
            <BsFillPatchCheckFill className="realtor__item-icon" />
            <img className="realstate__item-image" src={realtor_image} alt="realtor"/>
            <h3>Parwiz</h3>
        </div>
        <div className="realstate__item">
            <BsFillPatchCheckFill className="realtor__item-icon" />
            <img className="realstate__item-image" src={realtor_image} alt="realtor"/>
            <h3>Parwiz</h3>
        </div>
        <div className="realstate__item">
            <BsFillPatchCheckFill className="realtor__item-icon" />
            <img className="realstate__item-image" src={realtor_image} alt="realtor"/>
            <h3>Parwiz</h3>
        </div>
        </div>

        
    </section>
  )
}
