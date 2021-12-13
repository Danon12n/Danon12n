import React from 'react'
import cn from 'classnames'

import styles from './styles.module.sass'

const SelectorMany = ({ className, title, list, selected, setSelected }) => {

  const onClickArrow = side => {
    let newSelected

    if (side === 'left') {
      if (selected === 0)
        newSelected = list.length - 1
      else
        newSelected = selected - 1
    } else if (side === 'right') {
      if (selected === list.length - 1)
        newSelected = 0
      else
        newSelected = selected + 1
    }

    setSelected(newSelected)
  }

  className = className ? cn(styles.body, className) : styles.body

  return (
    <div {...{ className }}>
      <div className={styles.arrow} onClick={() => onClickArrow('left')}/>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{list[selected]}</div>
      <div className={styles.arrow} onClick={() => onClickArrow('right')}/>
    </div>
  )
}

export default SelectorMany
