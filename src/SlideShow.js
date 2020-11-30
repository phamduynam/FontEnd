import React from 'react';
import SlideShow from './Component/slideshow'


import img1 from './image/img1.png'
import img2 from './image/img2.jpg'
import img3 from './image/img3.png'
import img4 from './image/img3.png'
const collection = [
  {src:img1, caption:"one"},
  {src:img2, caption:"two"},
  {src:img3, caption:"three"},
  {src:img4, caption:"four"}
]

export default class App extends React.Component {
    render() {
      return (
        <SlideShow
          input={collection}
          ratio={`493:547`}
          mode={`manual`}
        />
      );
    }
  }