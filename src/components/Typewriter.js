import React, { useEffect, useState } from 'react'

const Typewriter = ({ text, endBlinker, finishedTyping, classes }) => {

  const [ index, setIndex ] = useState(0)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    if (endBlinker && (index >= text.length - 1)) { return setBlink(false) };

    const blinkTimeout = setTimeout(() => {
      setBlink(prev => !prev)
    }, 500)
    return () => clearTimeout(blinkTimeout)
  }, [blink])

  useEffect(() => {
    if (index < text.length) {
      const textTimeout = setTimeout(() => {
        setIndex(prev => prev + 1)
      }, 200)
      if ( finishedTyping && (index == text.length - 1)) { finishedTyping() }
      return () => clearTimeout(textTimeout)
    }
  }, [index])

  return (
    <span className={classes} >{`${text.substring(0, index)}${blink ? "|" : ""}`}</span>
  )
}

export default Typewriter
