import React from 'react'
import cn from 'classnames'

import styles from './styles.module.sass'

const SelectorDouble = ({ className, title, values, selected, setSelected }) => {

  const getValues = () => {
    return values.map((item, idx) => {

      return (
        <div
          key={`item-${idx}`}
          className={cn(styles.item, { [styles.selected]: !!idx === selected })}
          onClick={() => setSelected(!!idx)}
        >
          {values[idx]}
        </div>
      )
    })
  }

  className = className ? cn(styles.body, className) : styles.body

  return (
    <div {...{ className }}>
      <div className={styles.title}>{title}</div>
      {getValues()}
    </div>
  )
}

export default SelectorDouble
