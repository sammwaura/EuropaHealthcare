import React from 'react';
import Gallerybox from './Gallerybox';
import gallery1 from '../images/gallery1.jpg';
import gallery2 from '../images/gallery2.jpg';
import gallery3 from '../images/gallery3.jpg';
import gallery4 from '../images/gallery4.jpg';
import gallery5 from '../images/gallery5.jpg';
import gallery6 from '../images/gallery6.jpg';


function Gallery(props) {
  return (
    <div className='gallery'>
        <div className='g-heading'>
            <h3>Gallery</h3>
        </div>

        <div className='gallery-container'>
            <Gallerybox image={gallery1}/>
            <Gallerybox image={gallery2}/>
            <Gallerybox image={gallery3}/>
            <Gallerybox image={gallery4}/>
            <Gallerybox image={gallery5}/>
            <Gallerybox image={gallery6}/>
            

        </div>
        
      
    </div>
  )
}

export default Gallery
