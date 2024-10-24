import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
    <section className="form">
      <div className="container">
        <h2 className='form__h2'>Форма заказа билета в будущее</h2>
        <div className="form__input">
          <input placeholder='Имя' type="text" />
          <input placeholder='E-mail' type="text" />
          <input placeholder='Телефон' type="number"/>
          <input placeholder='Куда я полечу в ближайшее время?' type="text" />
          <button className="form__btn">ДВИГАТЬСЯ К МЕЧТЕЕЕ!!</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Form