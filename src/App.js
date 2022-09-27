import { useState } from 'react';
import { data } from './data';
import './App.css';
import Text from './Text';

function App() {
  const [painting, setPainting] = useState(0);
  const {id, description, price, image, rating} = data[painting];
  
  const nextPainting = () => {
    setPainting((painting => {
      painting++;
      if(painting > data.length - 1) {
        painting = 0
      }
      return painting;
    }))
  }

  const previousPainting = () => {
    setPainting((painting => {
      painting--;
      if(painting < 0) {
        return data.length - 1
      }
      return painting;
    }))
  }

  return (<div className='main'>
    
    <div className='heading'>
    <h1 className="caption">Создание картинок с помощью искусственного интеллекта</h1>
    </div>
    
    <div className='box'>
    <div className="header">
    <Text />
    </div>

    <div className='section'>
    <div key={id}>
    <div className="container">
      <h2 className="caption">Посмотреть</h2>
    </div>
      <div className="container">
        <img src={image} width="400px" alt="foto" />
      </div>
      <div className="container">
        <button className='btn caption' onClick={previousPainting}>Назад</button>
        <button className='btn caption' onClick={nextPainting}>Вперед</button>
      </div>
      <div className="container">
        <h3>{id}. {description}</h3>
      </div>
      <div className="container">
        <h3>Рейтинг: {rating}</h3>
      </div>
      <div className="container">
        <h3>Цена: {price}</h3>
      </div>
      <div className="container">
        <button className='caption' onClick={() => setPainting([])}>Delete All</button>
      </div>
    </div>
  </div>
  </div>
  </div>
  
  );
}

export default App;
