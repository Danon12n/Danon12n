import React from 'react'
import cn from 'classnames'

import styles from './styles.module.sass'

const ITEMS = ['Родители', 'Черты лица', 'Волосы']

const Navigation = ({ page, setPage }) => {

  const onClickItem = idx => {
    if (page !== idx)
      setPage(idx)
  }

  const getItems = () => {

    return ITEMS.map((item, idx) => {
      const name = `item-${idx}`

      return (
        <div
          key={name}
          className={
            cn(
              styles.item,
              styles[name],
              { [styles.selected]: idx === page }
            )
          }
          onClick={() => onClickItem(idx)}
        >
          {item}
        </div>
      )
    })
  }

  return (
    <div className={styles.navigation}>
      {getItems()}
    </div>
  )
}

export default Navigation