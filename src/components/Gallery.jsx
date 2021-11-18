import React from 'react';
import Gallerybox from './Gallerybox';
import gallery1 from '../images/gallery1.jpg';
import gallery2 from '../images/gallery2.jpg';
import gallery3 from '../images/gallery3.jpg';
import gallery4 from '../images/gallery4.jpg';
import gallery5 from '../images/gallery5.jpg';
import gallery6 from '../images/gallery6.jpg';
import gallery7 from '../images/gallery7.jpg';
import gallery8 from '../images/gallery8.jpg';
import gallery9 from '../images/gallery9.jpg';
import gallery10 from '../images/gallery10.jpg';
import gallery11 from '../images/gallery11.jpg';
import gallery12 from '../images/gallery12.jpg';



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
            <Gallerybox image={gallery7}/>
            <Gallerybox image={gallery8}/>
            <Gallerybox image={gallery9}/>
            <Gallerybox image={gallery10}/>
            <Gallerybox image={gallery11}/>
            <Gallerybox image={gallery12}/>
            

        </div>
        
      
    </div>
  )
}

export default Gallery
