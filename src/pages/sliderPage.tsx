import React, { useRef } from 'react'
import { RouteComponentProps } from '@reach/router'
import { motion } from  'framer-motion'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { center } from '../Common/globalCSS'
import { size } from 'polished'

const SliderPage: React.FC<RouteComponentProps> = () => {
  const dragRef = useRef(null)

  return(
    <div style={{ height: '100%' }} css={css`${center}`}>
      <div className="line" css={css`
        width: 400px;
        height: 10px;
        background: lavender;
        border-radius: 20px;
        ${center};
        cursor: pointer;
      `} ref={dragRef}>

        <motion.div className="oval" css={css`
          ${size(30)};
          background: mediumpurple;
          border-radius: 50%;
          position: absolute;
          cursor: ew-resize;
          border: 2px solid white;
          box-shadow: 0 0 2px 1px rgba(0,0,0,.12);
        `} drag='x' dragConstraints={dragRef} dragMomentum={false}>

        </motion.div>

      </div>
    </div>
  )
}

export default SliderPage