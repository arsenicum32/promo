import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="full center column">
          {/*<img classNameNameName={'picture'} src={require('../../../assets/back.jpg')} />*/}
          <p style={{width: '80%', fontSize: '1.4em'}}>Привет! Здесь сервис, который поможет тебе создать: плакат, открытку, визитку,
          обложку в два клика!
          </p>
          <Link style={{marginTop: '20px'}} className="button" to='/gallery'>смотреть примеры</Link>
        </div>
      </div>
    );
  }
}
