import React from 'react'
import styles from './rezalt.module.css'
class Rezalt extends React.Component
{
  constructor(props)
  {
    super(props)
  }
  render()
  {
    return (
      <div className={styles.rezalt}>
        <p className={styles.nextDay}>{this.props.item?.dt_txt.includes('09:00') ? "Дата: "+(this.props.item?.dt_txt).slice(0,11): ""}</p>
        <p>Время: {(this.props.item?.dt_txt).slice(11, 16)}</p>
        <p>Температура: {(this.props.item?.main?.temp - 273).toFixed(1)}&deg;C</p>
        <p>Погода: {this.props.item?.weather?.[0].description}</p>
      </div>
    )
  }
}
export default Rezalt