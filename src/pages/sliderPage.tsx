import React, { useRef } from 'react'
import { RouteComponentProps } from '@reach/router'
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { center } from '../Common/globalCSS'

const progress = 100
const width = 400

const SliderPage: React.FC<RouteComponentProps> = () => {
  const dragRef = useRef<HTMLDivElement | null>(null)
  const widthValue = useMotionValue(width)
  const progressValue = useMotionValue(progress)
  const ovalSizeValue = useMotionValue(30)
  const xValue = useTransform(progressValue, [0, 100], [0, widthValue.get()-ovalSizeValue.get()])

  console.log( xValue.get() )

  const handleDrag = (ev:MouseEvent | TouchEvent | PointerEvent, info:PanInfo)=>{
    // console.log( info )
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
      <motion.div
        className='line'
        style={{ width: widthValue.get() }}
        css={css`
          height: 10px;
          background: lavender;
          border-radius: 20px;
          ${center};
          justify-content: flex-start;
          cursor: pointer;
        `}
        ref={dragRef}
        onTap={(ev, info)=>console.log( info )}
      >
        <motion.div
          className='oval'
          style={{
            x: xValue,
            width: ovalSizeValue,
            height: ovalSizeValue
          }}
          css={css`
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
      </motion.div>
    </div>
  )
}

export default SliderPage
