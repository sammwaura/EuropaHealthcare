import React from 'react'

function Box(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image}/>
        </div>
        <div className='s-b-text'>
            <h2> {props.title} </h2>
            <p>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
        </div>
    </div>
  )
}

export default Box
