import React, { useState } from 'react'
import styles from './styles.module.sass'
import useRage from 'Hooks/useRage'

const SliderRotation = ({ title, min, max, id }) => {
  const { trigger } = useRage()
  const [value, setValue] = useState(max / 2)

  const onChange = event => {
    const { value: newValue } = event.target

    if (newValue !== value) {
      setValue(newValue)
      trigger(['characterCreate', JSON.stringify({ id, value: newValue })])
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.title}>{title}</div>
      <div className={styles.block}>
        <div className={styles.content}>
          <input type="range" className={styles.input} {...{ value, onChange, min, max }}/>
          <div className={styles.progress} style={{ width: `calc(${value}% - (${value / 100} * .6vw))` }}/>
        </div>
      </div>
    </div>
  )
}

export default SliderRotation