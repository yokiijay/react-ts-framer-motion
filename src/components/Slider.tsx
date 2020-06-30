import React, { useRef, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { center } from '../Common/globalCSS'
import {
  motion,
  useMotionValue,
  useTransform,
  transform,
  useAnimation,
} from 'framer-motion'
import { cover, rgba, tint } from 'polished'

const lineCSS = css`
  position: relative;
  width: 400px;
  height: 8px;
  background: lavender;
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: ew-resize;
`
const ovalCSS = css`
  position: relative;
  z-index: 1;
  ${center};
  color: transparent;
  font-size: 12px;
  border-radius: 30px;
  background: slateblue;
  box-sizing: border-box;
  transition: box-shadow 0.2s, color 0.2s;
  cursor: pointer;
  user-select: none;
  &:hover {
    box-shadow: 0 0 0 8px ${tint(0.8, 'mediumslateblue')};
    color: ${rgba('white', 8)};
  }
`
const ovalDragingCSS = css`
  box-shadow: 0 0 0 8px ${tint(0.8, 'mediumslateblue')};
  color: ${rgba('white', 8)};
`
const progressLineCSS = css`
  ${cover()};
  background: linear-gradient(to right, ${tint(.4, 'mediumslateblue')}, mediumslateblue);
  border-radius: 20px;
`

interface Props {
  width?: number
  ovalSize?: number
  initialProgress?: number
}

const Slider: React.FC<Props> = ({
  width = 400,
  ovalSize = 30,
  initialProgress = 50
}) => {
  // 元素
  const dragRef = useRef(null)

  // state
  const [progress, setProgress] = useState(initialProgress)

  // motion值
  const motionOvalX = useMotionValue(transform(initialProgress, [0, 100], [0, width - ovalSize/2]))
  const motionProgress = useTransform(motionOvalX, [0, width-ovalSize], [0, 100])
  const motionLineWidth = useTransform(motionProgress, [0, 100], [ovalSize/2, width])

  // animationControls
  const animation = useAnimation()

  motionProgress.onChange(v=>{
    setProgress(Math.floor(v))
  })

  // 事件
  const handleTap: (ev:MouseEvent | PointerEvent)=>void = (ev)=>{
    const {offsetX} = ev
    const x = transform(offsetX, [0, width], [0, width-ovalSize], {clamp: true})
    animation.start({
      x
    })
  }

  return (
    <motion.div className='line' css={lineCSS} ref={dragRef} onTap={handleTap}>
      <motion.div
        className='oval'
        style={{
          x: motionOvalX,
          width: ovalSize,
          height: ovalSize
        }}
        css={[ovalCSS]}
        animate={animation}
        drag='x'
        dragConstraints={dragRef}
        dragMomentum={false}
        dragElastic={false} onTap={ev=>ev.stopImmediatePropagation()}>
        {progress}
      </motion.div>

      <motion.div
        className='progress-line'
        css={progressLineCSS}
        style={{
          width: motionLineWidth,
          opacity: transform(progress, [0, 100], [.6, 1])
        }}
      />
    </motion.div>
  )
}

export default Slider
