import React, { Component } from 'react';

export default class uikit extends Component {
  render() {
    return (
      <div>
        <h1>Текст</h1>
        <hr />
        <h1>Заголовок</h1>
        <h2>Подзаголовок</h2>
        <h3>Уровень 3</h3>
        <h4>Уровень 4</h4>
        <p>наборный текст <span>выделение</span> </p>
        <h1>Элементы</h1>
        <a>ссылка</a>
        <button>кнопка</button>
        <input></input>
        <hr />
        <h1>Прочее</h1>
        <hr />
      </div>
    );
  }
}
