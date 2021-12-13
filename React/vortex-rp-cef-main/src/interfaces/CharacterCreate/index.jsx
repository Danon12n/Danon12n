import React from 'react'
import { useSelector } from 'react-redux'
import cn from 'classnames'

import styles from './styles.module.sass'

// import Rotation from './components/Rotation'
import MainWindow from './components/MainWindow'

const CharacterCreate = () => {
  const show = useSelector(state => state.characterCreate.show)

  return show && (
    <div className={cn(styles.main, { [styles.bg]: !window.hasOwnProperty('mp') })}>
      {/*<Rotation/>*/}
      <MainWindow/>
    </div>
  )
}

export default CharacterCreate
