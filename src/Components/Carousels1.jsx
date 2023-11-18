import React from 'react'
import {Carousel } from 'react-bootstrap'
import './Carousels1.css'

function Carousels1() {
  
  return (
    <div>
    
      <Carousel fade>
    <Carousel.Item>
      <img className="CarouselImg"  src="./images/desktop-wallpaper-dark-nature-dark-green-aesthetic.jpg" text="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="CarouselImg"  src="./images/35537526542_ebeaa64f69_b.jpg" text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="CarouselImg"  src="./images/1000_F_264368334_7hDMkKZAGFd71WVbYlfcdHfNqUnDv79t.jpg"  text="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  <br />
  </div>
  )
}

export default Carousels1