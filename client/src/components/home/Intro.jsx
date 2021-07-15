/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';

const Home = () => (
  <div id="intro" >
    <div className='grid' style={{ gridTemplateColumns: '1fr 1fr' }}>
      <div className='innerL '>
        <span className="F700 WFD"><br /> 'What's for Dinner' </span> <br />
        <span className="F300">
          is removing the tough decision making from your <i>plate</i> of to-do's, to make the plating of tasty & nutritious food easy & possible!
        </span>
      </div>
      <img src='./ImgSrc/RecipesClosed.png' className='innerR img' />
    </div>
    <div className='grid' style={{  justifyContent: 'center', gridTemplateColumns: '1fr 1fr 1fr', paddingTop: '40px' }}>
      <div className='highlight jR' style={{ backgroundColor: '#666782' }}>
        Are you exhausted from long days of work, yet still hungry at meal-time?
      </div>
      <div className='highlight jL' style={{ backgroundColor: '#666782' }}>
        Does your fridge/pantry have lots of ingredients, yet your brain is too tired to come up with a dish at meal time?
      </div>
      <div className="F300 highlight" style={{ justifyContent: 'center', backgroundColor: '#666782' }}>
        If this applies to you, <strong>ANY</strong> day of the week - this app is the solution to your decision making problems for dinner!
      </div>
    </div>
    <div className='grid' style={{ gridTemplateColumns: '1fr 1fr', border: '3px solid #666782' }}>
      <span className="F700 highlight WFD" style={{ paddingTop: '25px', paddingBottom: '0px', marginBottom: '0px', fontSize: '30px !important' }}>
        <strong style={{fontSize: '27px'}}>Planning Dinner Has Never Been Easier!</strong>
        <img src='./ImgSrc/InvSelected.png' className='img' />
      </span>
      <ol className="F300" style={{ paddingTop: '25px', paddingBottom: '0px', marginBottom: '0px', paddingRight: '10px' }}>
        <li>
          Just add your ingredients to your virtual <strong>Pantry</strong> and <strong>Fridge</strong> ahead of time.
        </li>
        <li>
          Then, once work ends and you're ready to decide what's for dinner, select your desired ingredients, and <i>voila</i> a recipe feed is filled!
        </li>
        <li>
          View ingredients in the drop down, and click a recipe card to go to that recipe page.
        </li>
      </ol>
    </div>
    <span className="WFD highlight" style={{ fontSize: '55px' }}>
      You'll never have to wonder <strong>What's For Dinner</strong> again!
    </span>
  </div >
);

export default Home;
