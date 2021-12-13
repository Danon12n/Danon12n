import React from 'react'
import useRage from 'Hooks/useRage'

import styles from './styles.module.sass'

import SelectorMany from '../SelectorMany'
import SelectorDouble from '../SelectorDouble'
import SelectorRange from '../SelectorRange'
import Finish from '../Finish'


const FATHERS = [
  'Benjamin', 'Daniel', 'Joshua', 'Noah',
  'Andrew', 'Juan', 'Alex', 'Isaac', 'Evan',
  'Ethan', 'Vincent', 'Angel', 'Diego',
  'Adrian', 'Gabriel', 'Michael', 'Santiago',
  'Kevin', 'Louis', 'Samuel', 'Anthony',
  'Claude', 'Niko', 'John'
]
const MOTHERS = [
  'Hannah', 'Aubrey', 'Jasmine', 'Gisele',
  'Amelia', 'Isabella', 'Zoe', 'Ava', 'Camila',
  'Violet', 'Sophia', 'Evelyn', 'Nicole',
  'Ashley', 'Gracie', 'Brianna', 'Natalie',
  'Olivia', 'Elizabeth', 'Charlotte', 'Emma', 'Misty'
]
const GENDERS = ['Мужской', 'Женский']

const Parents = ({ father, mother, gender, similarity, skinTone }) => {
  const { trigger } = useRage()

  const onChangeFather = val => {
    father.setFather(val)
    trigger(['CharacterCreate::onChange:father', val])
  }

  const onChangeMother = val => {
    mother.setMother(val)
    trigger(['CharacterCreate::onChange:mother', val])
  }

  const onChangeGender = val => {
    gender.setGender(val)
    trigger(['CharacterCreate::onChange:gender', val])
  }

  const onChangeSimilarity = val => {
    similarity.setSimilarity(val)
    trigger(['CharacterCreate::onChange:similarity', val])
  }

  const onChangeSkinTone = val => {
    skinTone.setSkinTone(val)
    trigger(['CharacterCreate::onChange:skinTone', val])
  }

  return (
    <div className={styles.parents}>
      <div className={styles.image}/>

      <SelectorMany
        className={styles.selector}
        title='Отец' list={FATHERS}
        selected={father.father}
        setSelected={onChangeFather}
      />
      <SelectorMany
        className={styles.selector}
        title='Мать'
        list={MOTHERS}
        selected={mother.mother}
        setSelected={onChangeMother}
      />
      <SelectorDouble
        className={styles.selector}
        title='Пол персонажа'
        values={GENDERS}
        selected={gender.gender}
        setSelected={onChangeGender}
      />
      <SelectorRange
        className={styles.selector}
        title='Схожесть'
        titles={['Отец', 'Мать']}
        value={similarity.similarity}
        setValue={onChangeSimilarity}
        min={-1}
        max={1}
        step={.1}
      />
      <SelectorRange
        className={styles.selector}
        title='Цвет кожи'
        titles={['Отец', 'Мать']}
        value={skinTone.skinTone}
        setValue={onChangeSkinTone}
        min={-1}
        max={1}
        step={.1}
      />
      <Finish/>
    </div>
  )
}

export default Parents
