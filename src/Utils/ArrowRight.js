import React from 'react'

const ArrowRight = ({
  style = {},
  stroke = 'black',
  width,
  className = '',
  viewBox = '0 0 380 380',
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
      d='M333.8 182.6H23.3v-23.2H334c-44.9-44.8-89.3-89.2-134-133.9 6.1-6.5 11.1-11.9 15.9-17L378 170.6 215.5 333.1c-4.3-4.6-9.4-10-14.7-15.6 44.6-44.6 89.1-89.1 133.6-133.5-.2-.5-.4-.9-.6-1.4z' />
  </svg>
)

export default ArrowRight
