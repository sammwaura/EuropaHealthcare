import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''></img>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>We have retained our drive for growth since 1996
                and have crossed several milestones to emerge as 
                one of the Europa Healthcare Ltd. was established in 
                Kenya in 1996 and in just a few years has become one of the largest 
                pharmaceutical distributors in the Kenyan market, with group 
                sale turnover in excess of 20 million USD. The business philosophy of 
                Europa Healthcare is to represent selected pharmaceutical manufacturers from 
                Europe and India and market their products exclusively in the Kenyan market
                through a sales force of over 60 representatives. These representatives cover 
                the entire medical field of doctors, hospitals, nursing homes and retail chemists.
                In addition, Europa HealthCare Ltd. has established an excellent relationship with 
                both the Government and Non-Governmental agencies as supplier of quality healthcare 
                products.
            </p>
        </div>
      
    </div>
  )
}

export default About
