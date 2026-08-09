import { useEffect, useState } from 'react'

// Types `text` one character at a time, then leaves a blinking block cursor.
export default function TypeWriter({ text, speed = 65, startDelay = 300 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(0)
    let timer
    const start = setTimeout(function tick() {
      setCount((c) => {
        if (c < text.length) {
          timer = setTimeout(tick, speed)
          return c + 1
        }
        return c
      })
    }, startDelay)
    return () => {
      clearTimeout(start)
      clearTimeout(timer)
    }
  }, [text, speed, startDelay])

  return (
    <>
      {text.slice(0, count)}
      <span className="cursor" aria-hidden="true" />
    </>
  )
}
