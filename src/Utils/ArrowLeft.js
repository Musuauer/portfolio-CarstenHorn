import React from 'react'

const ArrowLeft = ({
  style = {},
  stroke = 'black',
  width,
  className = '',
  viewBox = '110 250 380 380',
  fill = 'black'
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
    className={`svg-icon ${className || ''}`}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <path
      stroke={stroke}
      fill={fill}
      d='M476.7 433.3H165.9l134 134c-6 6.4-11.1 11.9-15.9 17-54.3-54.3-108.4-108.5-162.1-162.1l162.5-162.5c4.3 4.6 9.5 10 14.8 15.8-44.6 44.6-89.1 89.1-134.6 134.5h312.1v23.3z' />
  </svg>
)

export default ArrowLeft
