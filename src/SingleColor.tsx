import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

export type Color = {
  rgb: number[]
  weight: number
  hex: string
}

type Props = {
  color: Color
  index: number
}

const SingleColor = ({ color, index }: Props) => {
  const [alert, setAlert] = useState(false)
  const { rgb, hex: hexColor, weight } = color
  const backgroundColor = rgb.join(',')
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const id = setTimeout(() => {
      setAlert(false)
    }, 1000)
    return () => clearTimeout(id)
  }, [alert])

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${backgroundColor})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
      {alert && <p className="alert">copied to the clipboard</p>}
    </article>
  )
}

export default SingleColor
