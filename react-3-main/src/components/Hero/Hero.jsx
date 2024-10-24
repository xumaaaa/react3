import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="container">
        <h1 className='hero__h1'>Что меня ждет впереди</h1>
        <div className="hero__wrapper">
          <div className="card">
            <img src="https://abbos29.github.io/dream/img/icon1.png" alt="" />
            <h3>Свободное время</h3>
            <p>Мне нужно свободное время на семью и самое настоящее</p>
          </div>

          <div className="card">
            <img src="https://abbos29.github.io/dream/img/icon2.png" alt="" />
            <h3>Яркие путешествия</h3>
            <p>Работать откуда угодно - что может <br/> быть лучше?</p>
          </div>

          <div className="card">
            <img src="https://abbos29.github.io/dream/img/icon3.png" alt="" />
            <h3>Создание ценности</h3>
            <p>Нет ничего сильнее, чем жить не просто так, создавая ценность</p>
          </div>



        </div>
      </div>
    </section>
    </>
  )
}

export default Hero