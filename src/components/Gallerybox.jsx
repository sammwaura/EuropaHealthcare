import React from 'react'

function Gallerybox(props) {
  return (
    <div className='g-box'>
        <img src={props.image} alt='gallery-image'/>
    </div>
  )
}

export default Gallerybox
