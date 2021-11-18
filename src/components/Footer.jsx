import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol'

const FooterStyles = styled.div`
padding-top:18rem;
background-colour: var(--light-blue);
.container{
    display: flex;
    gap: 3rem;
}
.col{ 
    flex: 2;
}
.col2,
.col3{
    flex:1
}
.col-title{
    font-size: 3.5rem;
    margin-bottom: 1rem;
}
`;
function Footer() {
    return (
      <div className='main-footer'>
          <div className='container'>
                  <div className='col'>
                      <h4 className='col-title'>EUROPA HEALTHCARE LTD</h4>
                      <p>Europa Health Care provides aggressive,
                          and affordable healthcare, accessible
                          on mobile and online for everyone
                      </p>
                    </div>

                    <div className='col2'>
                        <FooterCol/>
                        <h4>Company</h4>
                        <ul className='list-unstyled'>
                            <li>About</li>
                            <li>Products</li>
                            <li>Find a doctor</li>
                            <li>Apps</li>
                        </ul>
                    </div>

                    <div className='col3'>
                        <FooterCol/>
                        <h4>Help</h4>
                        <ul className='list-unstyled'>
                            <li>FAQs</li>
                            <li>Contact Support</li>
                            <li>Media Center</li>
                            <li>How it works</li>
                        </ul>
                    </div>

              </div>
                <div className='row'>
                    <p className='col-sm'>
                        &copy;Europa Health Care Ltd 2021 | All Rights reserved
                    </p>

                </div>
          </div>
    )
}

export default Footer
