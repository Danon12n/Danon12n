import React, { useMemo } from 'react'
import cn from 'classnames'

import styles from './styles.module.sass'

const SelectorRange = ({ className, title, titles, value, setValue, min, max, step = 1 }) => {

  const onChange = event => setValue(event.target.value)

  className = className ? cn(styles.body, className) : styles.body

  const getProgressWidth = (min, max, value) => {
    const distance = Math.abs(min) + Math.abs(max)
    const percent = distance / 100
    value = Math.abs(min - value)
    const pValue = value / percent
    return `calc(${pValue}% - (${pValue / 100} * .6vw))`
  }

  const progressWidth = useMemo(() => getProgressWidth(min, max, value), [min, max, value])

  return (
    <div {...{ className }}>
      <div className={styles.subtitle}>{titles[0]}</div>

      <div className={styles.title}>{title}</div>

      <div className={styles.block}>
        <input type="range" className={styles.input} {...{ value, onChange, min, max, step }}/>
        <div className={styles.progress} style={{ width: progressWidth }}/>
      </div>

      <div className={styles.subtitle}>{titles[1]}</div>
    </div>
  )
}

export default SelectorRange
