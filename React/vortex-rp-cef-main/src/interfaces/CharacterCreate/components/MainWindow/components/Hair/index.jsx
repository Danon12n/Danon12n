import React from 'react'

import styles from './styles.module.sass'

import SelectorMany from '../SelectorMany'
import Finish from '../Finish'

const HAIR_M = [
  'None', 'Buzzcut', 'Faux Hawk', 'Hipster', 'Side Parting',
  'Shorter Cut', 'Biker', 'Ponytail', 'Cornrows', 'Slicked',
  'Short Brushed', 'Spikey', 'Caesar', 'Chopped', 'Dreads',
  'Long Hair', 'Shaggy Curls', 'Surfer Dude', 'Short Side Part',
  'High Slicked Sides', 'Long Slicked', 'Hipster Youth',
  'Mullet', 'Classic Cornrows', 'Palm Cornrows', 'Lightning Cornrows',
  'Whipped Cornrows', 'Zig Zag Cornrows', 'Snail Cornrows',
  'Hightop', 'Loose Swept Back', 'Undercut Swept Back',
  'Undercut Swept Side', 'Spiked Mohawk', 'Mod',
  'Layered Mod', 'Flattop', 'Rolled Quiff'
]
const HAIR_F = [
  'None', 'Short', 'Layered Bob', 'Pigtails', 'Ponytail',
  'Braided Mohawk', 'Braids', 'Bob', 'Faux Hawk', 'French Twist',
  'Long Bob', 'Loose Tied', 'Pixie', 'Shaved Bangs', 'Top Knot',
  'Wavy Bob', 'Messy Bun', 'Pin Up Girl', 'Tight Bun', 'Twisted Bob',
  'Flapper Bob', 'Big Bangs', 'Braided Top Knot', 'Mullet',
  'Pinched Cornrows', 'Leaf Cornrows', 'Zig Zag Cornrows',
  'Pigtail Bangs', 'Wave Braids', 'Coil Braids', 'Rolled Quiff',
  'Loose Swept Back', 'Undercut Swept Back', 'Undercut Swept Side',
  'Spiked Mohawk', 'Bandana and Braid', 'Layered Mod'
]
const EYEBROWS_M = [
  'None', 'Balanced', 'Fashion', 'Cleopatra', 'Quizzical',
  'Femme', 'Seductive', 'Pinched', 'Chola', 'Triomphe',
  'Carefree', 'Curvaceous', 'Rodent', 'Double Tram', 'Thin',
  'Penciled', 'Mother Plucker', 'Straight and Narrow',
  'Natural', 'Fuzzy', 'Unkempt', 'Caterpillar', 'Regular',
  'Mediterranean', 'Groomed', 'Bushels', 'Feathered', 'Prickly',
  'Monobrow', 'Winged', 'Triple Tram', 'Arched Tram', 'Cutouts',
  'Fade Away', 'Solo Tram'
]
const EYEBROWS_F = [
  'None', 'Balanced', 'Fashion', 'Cleopatra', 'Quizzical',
  'Femme', 'Seductive', 'Pinched', 'Chola', 'Triomphe',
  'Carefree', 'Curvaceous', 'Rodent', 'Double Tram', 'Thin',
  'Penciled', 'Mother Plucker', 'Straight and Narrow',
  'Natural', 'Fuzzy', 'Unkempt', 'Caterpillar', 'Regular',
  'Mediterranean', 'Groomed', 'Bushels', 'Feathered', 'Prickly',
  'Monobrow', 'Winged', 'Triple Tram', 'Arched Tram', 'Cutouts',
  'Fade Away', 'Solo Tram'
]
const BEARDS = [
  'None', 'Light Stubble', 'Balbo', 'Circle Beard', 'Goatee',
  'Chin', 'Chin Fuzz', 'Pencil Chin Strap', 'Scruffy', 'Musketeer',
  'Mustache', 'Trimmed Beard', 'Stubble', 'Thin Circle Beard',
  'Horseshoe', 'Pencil and \'Chops', 'Chin Strap Beard',
  'Balbo and Sideburns', 'Mutton Chops', 'Scruffy Beard',
  'Curly', 'Curly & Deep Stranger', 'Handlebar', 'Faustic',
  'Otto & Patch', 'Otto & Full Stranger', 'Light Franz',
  'The Hampstead', 'The Ambrose', 'Lincoln Curtain'
]
const HAIR_COLORS = new Array(21).fill(null).map((item, idx) => idx.toString())
const EYE_COLORS = [
  'Green', 'Emerald', 'Light Blue', 'Ocean Blue',
  'Light Brown', 'Dark Brown', 'Hazel', 'Dark Gray',
  'Light Gray', 'Pink', 'Yellow', 'Purple'
]

const Hair = ({ gender, params, onChange }) => {

  return (
    <div className={styles.hair}>

      <SelectorMany
        className={styles.selector}
        title='Волосы'
        list={gender ? HAIR_F : HAIR_M}
        selected={params.hair}
        setSelected={(val) => onChange('hair', val)}
      />
      <SelectorMany
        className={styles.selector}
        title='Брови'
        list={gender ? EYEBROWS_F : EYEBROWS_M}
        selected={params.eyebrows}
        setSelected={(val) => onChange('eyebrows', val)}
      />
      <SelectorMany
        className={styles.selector}
        title='Борода'
        list={BEARDS}
        selected={params.beard}
        setSelected={(val) => onChange('beard', val)}
      />
      <SelectorMany
        className={styles.selector}
        title='Цвет волос'
        list={HAIR_COLORS}
        selected={params.hairColor}
        setSelected={(val) => onChange('hairColor', val)}
      />
      <SelectorMany
        className={styles.selector}
        title='Цвет глаз'
        list={EYE_COLORS}
        selected={params.eyeColor}
        setSelected={(val) => onChange('eyeColor', val)}
      />

      <Finish/>
    </div>
  )
}

export default Hair
