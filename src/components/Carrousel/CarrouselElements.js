// import styled from 'styled-components';

// export default styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// // export default styled.div`
// // display:flex;
// // justify-content:center;
// // align-items:center;
// // height:250px;
// // width:100%;
// // background-color:#00008B;
// // color: #fff;
// // margin : 0 15px;
// // font-size: 4em;
// // `

import React from 'react';
import {Carousel} from 'react-bootstrap';
import Image1 from '../../assets/images/sabios_guias_1.jpg'
import Image2 from '../../assets/images/sabios_guias_2.jpg'
import Image3 from '../../assets/images/sabios_guias_3.jpg'

const CarouselElement = () => {
  return (
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Image1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={Image2}
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image3}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  )
}

export default CarouselElement;