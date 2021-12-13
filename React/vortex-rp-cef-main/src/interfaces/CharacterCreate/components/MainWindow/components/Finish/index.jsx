import React from 'react'
import cn from 'classnames'
import useRage from 'Hooks/useRage'

import styles from './styles.module.sass'

const Finish = ({ className }) => {

  const { trigger } = useRage()

  const onClickFinish = () => {
    trigger(['CharacterCreate::onClick:finish'], 500)
  }

  const onClickBack = () => {
    trigger(['CharacterCreate::onClick:back'], 500)
  }

  className = className ? cn(styles.body, className) : styles.body

  return (
    <div {...{ className }}>
      <div className={styles.finish} onClick={onClickFinish}>Создать персонажа</div>
      <div className={styles.back} onClick={onClickBack}>Вернуться назад</div>
    </div>
  )
}

export default Finish
