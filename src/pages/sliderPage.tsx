import React, { useRef, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { motion, PanInfo } from 'framer-motion'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { center } from '../Common/globalCSS'
import { size } from 'polished'

const SliderPage: React.FC<RouteComponentProps> = () => {
  const dragRef = useRef<HTMLDivElement | null>(null)
  const lineWidth = dragRef.current

  console.log( dragRef.current )

  const handleDrag = (ev:MouseEvent | TouchEvent | PointerEvent, info:PanInfo)=>{
    console.log( info )
  }

  return (
    <div
      style={{ height: '100%' }}
      css={css`
        ${center}
        flex-direction: column;
      `}
    >
      {/* <h1>100</h1> */}
      <div
        className='line'
        css={css`
          width: 400px;
          height: 10px;
          background: lavender;
          border-radius: 20px;
          ${center};
          cursor: pointer;
        `}
        ref={dragRef}
      >
        <motion.div
          className='oval'
          css={css`
            ${size(30)};
            background: mediumpurple;
            border-radius: 60px;
            position: absolute;
            cursor: ew-resize;
            border: 2px solid white;
            box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.12);
            ${center};
            color: white;
            font-size: 14px;
          `}
          drag='x'
          dragConstraints={dragRef}
          dragMomentum={false}
          onDrag={handleDrag}
        >100</motion.div>
      </div>
    </div>
  )
}

export default SliderPage
