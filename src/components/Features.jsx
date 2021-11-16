import React from 'react';
import Box from './Box';
import featureimage from '../images/feature_1.png';
import featureimage2 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';

function Features() {   
  return (
    <div id='features'>
        <div className='a-container'>
            <Box image={featureimage} title='Wider Coverage '></Box>
            <Box image={featureimage2} title='Customer Knowledge '></Box>
            <Box image={featureimage3} title='First Rate Logistics '></Box>
            

        </div>
      
    </div>
  )
}

export default Features
