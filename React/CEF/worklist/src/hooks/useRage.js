import { useState } from 'react'

export default function useRage() {
  const [isAntiSpam, setIsAntiSpam] = useState(false)

  const trigger = (args, time = 0) => {
    if (time) {
      if (isAntiSpam) {
        return console.log('antiSpam!')
      } else {
        setIsAntiSpam(true)
        setTimeout(() => setIsAntiSpam(false), time)
      }
    }

    try {
      mp.trigger(...args)
    } catch (e) {
      console.log(`trigger`, ...args)
    }
  }

  return { trigger, isAntiSpam }
}