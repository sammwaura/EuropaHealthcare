import React from 'react'

function Bronchures(props) {
  return (
    <div id='bronchures'>
        <div className='bronchures-text'>
            <h2>{props.title}</h2>
            <p>Our dedicated patient engagement bronchures
                and web portal allow you to access information 
                instantaneously (no tedeous form, long calls, or administrative 
                hassle) and securely.
            </p>
            <button>{props.button}</button>
        </div>
        <div className='bronchures-image'>
            <img src={props.image} alt=''></img>
        </div>
    </div>
  )
}

export default Bronchures
