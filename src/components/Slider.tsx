import React, { useRef, useState, useEffect } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { center } from '../Common/globalCSS'
import {
  motion,
  useMotionValue,
  useTransform,
  transform,
  useAnimation,
  TapInfo
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
  opacity: .4;
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
  const ovalWidthValue = useMotionValue(ovalSize)
  const ovalXValue = useMotionValue( transform(initialProgress, [0, 100], [-ovalWidthValue.get()/2, width - ovalWidthValue.get()/2]) )
  const ovalProgressValue = useTransform( ovalXValue, [0, width - ovalWidthValue.get()], [0, 100] )

  const animation = useAnimation()

  const dragRef = useRef<HTMLDivElement>(null)
  const [isDraging, setDraging] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(ovalProgressValue.get())

  useEffect(() => {
    const unsubscribe = ovalProgressValue.onChange(() =>
      setProgress(ovalProgressValue.get())
    )
    return () => {
      unsubscribe()
    }
  }, [ovalWidthValue, ovalXValue, ovalProgressValue])

  const handleTap: (event: MouseEvent, info: TapInfo)=> void = (ev, info)=>{
    const {offsetX} = ev
    animation.start({
      x: offsetX - ovalWidthValue.get()/2
    })
  }

  return (
    <motion.div className='line' css={lineCSS} ref={dragRef} onTap={handleTap}>
      <motion.div
        className='oval'
        css={[ovalCSS, isDraging && ovalDragingCSS]}
        style={{ x: ovalXValue, width: ovalWidthValue, height: ovalSize }}
        animate={animation}
        drag='x'
        dragConstraints={{
          left: ovalWidthValue.get()/2,
          right: width - ovalWidthValue.get()/2
        }}
        dragMomentum={false}
        dragElastic={false}
        onDragStart={() => setDraging(true)}
        onDragEnd={() => setDraging(false)} whileHover={{scale: 1.2}} onTap={ev=>ev.stopImmediatePropagation()}>
        {Math.floor(progress)}
      </motion.div>

      <motion.div
        className='progress-line'
        css={progressLineCSS}
        style={{ width: ovalXValue.get() + ovalWidthValue.get()/2 }}
      />
    </motion.div>
  )
}

export default Slider
