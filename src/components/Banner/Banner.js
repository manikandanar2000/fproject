import React from 'react'
import './Banners.css';

function Banner() {
  return (
    <div>
       <div className='banner'>
      <div className='content'>
          <h1 className='title'>MOVIE NAME</h1>
          <div className='bannerbutton'>
              <button className='button'>Play</button>
              <button className='button'>Mylist</button>

          </div>
          <h1 className='discription'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a</h1>

      </div>
      <div className="fade_bottom"></div>
    </div>
    </div>
  )
}

export default Banner
