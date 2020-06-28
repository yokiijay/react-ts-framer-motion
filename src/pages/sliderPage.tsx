import React, { useRef, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { motion, PanInfo, useMotionValue, useTransform, transform } from 'framer-motion'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { center } from '../Common/globalCSS'

const initProgress = 90
const width = 400

const SliderPage: React.FC<RouteComponentProps> = () => {
  const dragRef = useRef<HTMLDivElement | null>(null)
  const widthValue = useMotionValue(width)
  const progressValue = useMotionValue(initProgress)
  const ovalSizeValue = useMotionValue(30)
  // const xValue = useTransform(progressValue, [0, 100], [0, widthValue.get()-ovalSizeValue.get()])
  const xValue = useMotionValue(widthValue.get()*progressValue.get()/100-ovalSizeValue.get())

  const [progress, setProgress] = useState<number>(progressValue.get())
  const handleDrag = ()=>{
    setProgress(transform(xValue.get(), [0, widthValue.get()-ovalSizeValue.get()], [0, 100]))
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
        style={{ width: widthValue }}
        css={css`
          height: 10px;
          background: lavender;
          border-radius: 20px;
          ${center};
          justify-content: flex-start;
          cursor: pointer;
        `}
        ref={dragRef}
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
          // onDragStart={()=>}
        >{Math.floor(progress)}</motion.div>
      </motion.div>
    </div>
  )
}

export default SliderPage
