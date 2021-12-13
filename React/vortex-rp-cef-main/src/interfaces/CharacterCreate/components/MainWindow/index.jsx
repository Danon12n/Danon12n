import React, { useEffect, useState } from 'react'
import useRage from 'Hooks/useRage'

import styles from './styles.module.sass'

import Navigation from './components/Navigation'
import Parents from './components/Parents'
import Face from './components/Face'
import Hair from './components/Hair'

const MainWindow = () => {

  const { trigger } = useRage()

  const [page, setPage] = useState(1)
  const [father, setFather] = useState(0)
  const [mother, setMother] = useState(0)
  const [gender, setGender] = useState(false)
  const [similarity, setSimilarity] = useState(0)
  const [skinTone, setSkinTone] = useState(0)

  const [face, setFace] = useState({
    noseWidth: 0,
    noseHeight: 0,
    noseTipLength: 0,
    noseDepth: 0,
    noseTipHeight: 0,
    noseBroke: 0,
    eyebrowsHeight: 0,
    eyebrowsDepth: 0,
    eyeScale: 0,
    lipThickness: 0,
    jawWidth: 0,
    jawShape: 0,
    chinHeight: 0,
    chinDepth: 0,
    chinWidth: 0,
    chinIndent: 0,
    neck: 0,
  })

  const [hair, setHair] = useState({
    hair: 0,
    eyebrows: 0,
    beard: 0,
    hairColor: 0,
    eyeColor: 0,
  })

  const onChangeFace = (key, value) => {
    setFace({
      ...face,
      [key]: value
    })
    trigger(['CharacterCreate::onChange:face', JSON.stringify({ key, value })])
  }

  const onChangeHair = (key, value) => {
    setHair({
      ...hair,
      [key]: value
    })
    trigger(['CharacterCreate::onChange:hair', JSON.stringify({ key, value })])
  }

  const getPage = () => {

    switch (page) {
      case 0:
        return (
          <Parents
            father={{ father, setFather }}
            mother={{ mother, setMother }}
            gender={{ gender, setGender }}
            similarity={{ similarity, setSimilarity }}
            skinTone={{ skinTone, setSkinTone }}
          />
        )

      case 1:
        return (
          <Face
            params={face}
            onChange={onChangeFace}
          />
        )

      case 2:
        return (
          <Hair
            gender={gender.gender}
            params={hair}
            onChange={onChangeHair}
          />
        )
    }
  }

  return (
    <div className={styles.mainWindow}>
      <div className={styles.title}>Создание персонажа</div>
      <Navigation {...{ page, setPage }}/>
      {getPage()}
    </div>
  )
}

export default MainWindow