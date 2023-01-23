import React from 'react';
import './header.css';
import { FaKey, FaUser, FaRegHeart } from 'react-icons/fa';
import { BsMoonStars } from 'react-icons/bs';
import Select from 'react-select';
import { useState } from 'react';
import { Nav } from '../nav/Nav';



export const Header = () => {
   const [selectCategory, setSelectCategory] = useState();
   const [selectPlace, setSelectedPlace] = useState();
   
    const categories = [
        { label: 'Apartment For Sell', value: 'sellingApartment'},
        { label: 'Room For Rent', value: 'rentingRoom'},
        { label: 'Hous For Sell', value: 'sellingHous'},
        { lable: 'Property For Sell', value: 'sellingProperty'}
    ];
    const places = [
        { label: 'Berlin', value: 'berlin'},
        { label: 'Frankfurt', value: 'frankfurt'},
        { label: 'Hamburg', value: 'hamburg'},
        { lable: 'Munich', value: 'munich'}
    ];
  return (
    <header>
        <div className="container header__container">
            <div className="header__top">
                <div className="header__left">  
                    <h1 className="header__title"><i><FaKey className="header__icon"/></i>REALTOR</h1>
                    <h4 className="header__subtitle">From <i><BsMoonStars /></i> Moons</h4>
                </div>
                <Nav className="header__nav" />
                <div className="header__right">
                    <button type="button" className="btn header__add__button">+ Add an Adver</button>
                    <FaRegHeart />
                    <FaUser />
                </div>
            </div>
            <div>
            <h2 className="header__main">Best Realtors Who</h2></div>
            <div><h2 className="header__sub">help you find accomodations</h2></div>
            
            <div>
                <form className="header__form">
                    <Select className="item" options={categories} value={selectCategory} placeholder="Select Cateogry" name="category" />
                    <Select className="item" options={places} value={selectPlace} placeholder="Select Regin" name="place" />
                    <button type="submit" className="btn btn-primary">Find</button> 
                </form>
            </div>  
        </div>
    </header>
  )
}
