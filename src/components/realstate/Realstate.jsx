import React from 'react';
import './realstate.css';
import { FaKey } from 'react-icons/fa';
import { MdAdd, MdOutlineApartment, MdOutlineBedroomParent, MdOutlineHouse } from 'react-icons/md';
import { ImOffice } from 'react-icons/im';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

export const Realstate = () => {
  return (
    <section id="realestate">
        <div className="realestate__header">
        <h2><i className="realestate__header-icon"><FaKey /></i>Real Estate in Germany</h2>
        <button type="button" className="btn"><i><MdAdd /></i> Add An Advert</button>
        </div>
      <div className="container realestate__container">
        <div className="realstate__item">
            <MdOutlineApartment className="realstate__item-icon" />
            <h3>Apartment</h3>
            <ul className='realstate__details'>
             <li>Sell - 200</li>
             <li>Rent - 200</li>
            </ul>
        </div>
        <div className="realstate__item">
            <MdOutlineHouse className="realstate__item-icon" />
            <h3>House</h3>
            <ul className='realstate__details'>
             <li>Sell - 200</li>
             <li>Rent - 200</li>
            </ul>
        </div>
        <div className="realstate__item">
            <MdOutlineBedroomParent className="realstate__item-icon" />
            <h3>Room</h3>
            <ul className='realstate__details'>
             <li>Sell - 200</li>
             <li>Rent - 200</li>
            </ul>
        </div>
        <div className="realstate__item">
            <ImOffice className="realstate__item-icon" />
            <h3>Office</h3>
            <ul className='realstate__details'>
             <li>Sell - 200</li>
             <li>Rent - 200</li>
            </ul>
        </div>
        <div className="realstate__item">
            <MdOutlineHouse className="realstate__item-icon" />
            <h3>Earth</h3>
            <ul className='realstate__details'>
             <li>Sell - 200</li>
             <li>Rent - 200</li>
            </ul>
        </div>
        <div className="realstate__item">
            <HiOutlineBuildingOffice2 className="realstate__item-icon" />
            <h3>Commercial</h3>
            <ul className='realstate__details'>
             <li>Sell - 200</li>
             <li>Rent - 200</li>
            </ul>
        </div>
      </div>

        
    </section>
  )
}
