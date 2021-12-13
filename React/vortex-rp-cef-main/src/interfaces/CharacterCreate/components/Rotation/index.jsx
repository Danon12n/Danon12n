import React from 'react'
import styles from './styles.module.sass'

import SliderRotation from './components/SliderRotation'

const SLIDER_MIN = 0
const SLIDER_MAX = 100

const Rotation = () => {
  return (
    <div className={styles.rotation}>
      <div className={styles.title}>Ротация</div>
      <div className={styles.content}>
        <SliderRotation
          title='Поворот'
          min={SLIDER_MIN}
          max={SLIDER_MAX}
          id={0}
        />
        <SliderRotation
          title='Высота'
          min={SLIDER_MIN}
          max={SLIDER_MAX}
          id={1}
        />
        <SliderRotation
          title='Дальность'
          min={SLIDER_MIN}
          max={SLIDER_MAX}
          id={2}
        />
      </div>
    </div>
  )
}

export default Rotation