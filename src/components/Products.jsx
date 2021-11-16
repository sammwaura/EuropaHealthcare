import React from 'react'

function Products(props) {
  return (
    <div id='products'>
        <div className='products-image'>
            <img src={props.image} alt=''></img>
        </div>
        <div className='products-text'>
            <h2>{props.title}</h2>
            <p>Europa Health Care provides progressive,
                 and affordable healthcare, 
                accessible on mobile and online for everyone. 
                To us, its not just work. 
                We take pride in the solutions we deliver.
            </p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default Products
