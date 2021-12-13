import React from 'react'

import styles from './styles.module.sass'

import SelectorMany from '../SelectorMany'
import SelectorRange from '../SelectorRange'
import Finish from '../Finish'

const PARAMS_NAMES = {
  noseWidth: 'Ширина носа',
  noseHeight: 'Высота носы',
  noseTipLength: 'Длинна кончика носа',
  noseDepth: 'Глубина носа',
  noseTipHeight: 'Высота кончика носа',
  noseBroke: 'Излом носа',
  eyebrowsHeight: 'Высота бровей',
  eyebrowsDepth: 'Глубина бровей',
  eyeScale: 'Разрез глаз',
  lipThickness: 'Толщина губ',
  jawWidth: 'Ширина челюсти',
  jawShape: 'Форма челюсти',
  chinHeight: 'Высота челюсти',
  chinDepth: 'Глубина челюсти',
  chinWidth: 'Ширина челюсти',
  chinIndent: 'Выемка на челюсти',
  neck: 'Шея'
}

const Face = ({ params, onChange }) => {

  const getSelectors = () => {

    const output = []

    for (const key in params) {
      if (params.hasOwnProperty(key))
        output.push(
          <SelectorRange
            key={`selector-${key}`}
            className={styles.selector}
            title={PARAMS_NAMES[key]}
            titles={['Меньше', 'Больше']}
            value={params[key]}
            setValue={val => onChange(key, val)}
            min={-1}
            max={1}
            step={.1}
          />
        )
    }

    return output
  }

  return (<>
    <div className={styles.background}/>

    <div className={styles.face}>

      {getSelectors()}

      <Finish className={styles.finish}/>

    </div>
  </>)
}

export default Face
