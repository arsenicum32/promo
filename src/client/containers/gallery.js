import React, { Component } from 'react';

import './gallery.styl'

import im1 from '../../../assets/1.jpg'
import im2 from '../../../assets/2.jpg'
import im3 from '../../../assets/3.jpg'
import im4 from '../../../assets/4.jpg'
import im5 from '../../../assets/5.jpg'
import im6 from '../../../assets/6.jpg'

const Img = ({ src })=> (
  <img className="item" src={require(`${src}`)} />
)

export default class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [
        im1,
        im2,
        im3,
        im4,
        im5,
        im6
      ]
    }
  }
  render() {
    let {images} = this.state;
    return (
      <div>
        <div className="galleryBody">
          <div>
            <p>Уже сгенерированно 134 344 плаката!</p>
            <a className="button" href='http://plakot.ru'>создать свой</a>
          </div>
          <div className="galleryPic">
            {
              images.map((e,i)=> <img key={i} className="item" src={e} /> )
            }
          </div>
          <div className="galleyNav">
            <a href="#">предыдущие</a>
            <br/>
            <a href="#">другие</a>
            <br/>
            <br/>
            <small>сортировать по:</small>
            <br/>
            <b>времени</b>
            <br/>
            <small>качеству</small>
          </div>
        </div>
      </div>
    );
  }
}
