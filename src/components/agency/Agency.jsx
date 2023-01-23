import React from 'react';
import './agency.css';
import { GiTrophyCup } from 'react-icons/gi';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import realtor_image from '../../assets/realtor_image.png';

export const Agency = () => {
  return (
    <section className="container agency__container">
        <div className="container__header">
        <h2><i className="container__header-icon"><GiTrophyCup /></i>Germany real state agencies</h2>
        <button type="button" className="btn btn-primary">See All</button>
        </div>
        <div className="container cart__container">
        </div>
    </section>
  )
}
