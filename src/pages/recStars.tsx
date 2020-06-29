import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const initBgs = [ 'https://picsum.photos/seed/329/240/180', 'https://picsum.photos/seed/1496/240/180', 'https://picsum.photos/seed/7754/240/180', 'https://picsum.photos/seed/8553/240/180', 'https://picsum.photos/seed/4291/240/180', 'https://picsum.photos/seed/2158/240/180', 'https://picsum.photos/seed/2984/240/180', 'https://picsum.photos/seed/5869/240/180', 'https://picsum.photos/seed/1824/240/180', 'https://picsum.photos/seed/2781/240/180', 'https://picsum.photos/seed/9692/240/180', 'https://picsum.photos/seed/2450/240/180', 'https://picsum.photos/seed/1350/240/180', 'https://picsum.photos/seed/6062/240/180', 'https://picsum.photos/seed/5745/240/180', 'https://picsum.photos/seed/2133/240/180', 'https://picsum.photos/seed/5659/240/180', 'https://picsum.photos/seed/7470/240/180', 'https://picsum.photos/seed/3353/240/180', 'https://picsum.photos/seed/6076/240/180', 'https://picsum.photos/seed/310/240/180', 'https://picsum.photos/seed/3199/240/180', 'https://picsum.photos/seed/6900/240/180', 'https://picsum.photos/seed/4465/240/180', 'https://picsum.photos/seed/9646/240/180', 'https://picsum.photos/seed/6750/240/180', 'https://picsum.photos/seed/2516/240/180', 'https://picsum.photos/seed/5270/240/180', 'https://picsum.photos/seed/5997/240/180', 'https://picsum.photos/seed/2698/240/180', 'https://picsum.photos/seed/9615/240/180', 'https://picsum.photos/seed/9427/240/180', 'https://picsum.photos/seed/6812/240/180', 'https://picsum.photos/seed/8248/240/180', 'https://picsum.photos/seed/6699/240/180', 'https://picsum.photos/seed/5220/240/180', 'https://picsum.photos/seed/6972/240/180', 'https://picsum.photos/seed/4198/240/180', 'https://picsum.photos/seed/2283/240/180', 'https://picsum.photos/seed/8074/240/180', 'https://picsum.photos/seed/7616/240/180', 'https://picsum.photos/seed/808/240/180', 'https://picsum.photos/seed/9046/240/180', 'https://picsum.photos/seed/482/240/180', 'https://picsum.photos/seed/8113/240/180', 'https://picsum.photos/seed/6454/240/180', 'https://picsum.photos/seed/4505/240/180', 'https://picsum.photos/seed/2668/240/180', 'https://picsum.photos/seed/4940/240/180', 'https://picsum.photos/seed/382/240/180', 'https://picsum.photos/seed/6241/240/180', 'https://picsum.photos/seed/3532/240/180', 'https://picsum.photos/seed/1523/240/180', 'https://picsum.photos/seed/9382/240/180', 'https://picsum.photos/seed/3396/240/180', 'https://picsum.photos/seed/5373/240/180', 'https://picsum.photos/seed/7735/240/180', 'https://picsum.photos/seed/4425/240/180', 'https://picsum.photos/seed/5533/240/180', 'https://picsum.photos/seed/9128/240/180', 'https://picsum.photos/seed/2002/240/180', 'https://picsum.photos/seed/376/240/180', 'https://picsum.photos/seed/6783/240/180', 'https://picsum.photos/seed/3174/240/180', 'https://picsum.photos/seed/2810/240/180', 'https://picsum.photos/seed/6257/240/180', 'https://picsum.photos/seed/2329/240/180', 'https://picsum.photos/seed/2730/240/180', 'https://picsum.photos/seed/7618/240/180', 'https://picsum.photos/seed/8927/240/180', 'https://picsum.photos/seed/7399/240/180', 'https://picsum.photos/seed/5823/240/180', 'https://picsum.photos/seed/181/240/180', 'https://picsum.photos/seed/6868/240/180', 'https://picsum.photos/seed/5468/240/180', 'https://picsum.photos/seed/8485/240/180', 'https://picsum.photos/seed/2617/240/180', 'https://picsum.photos/seed/5988/240/180', 'https://picsum.photos/seed/4580/240/180', 'https://picsum.photos/seed/2530/240/180', 'https://picsum.photos/seed/5998/240/180', 'https://picsum.photos/seed/4654/240/180', 'https://picsum.photos/seed/6451/240/180', 'https://picsum.photos/seed/71/240/180', 'https://picsum.photos/seed/793/240/180', 'https://picsum.photos/seed/6423/240/180', 'https://picsum.photos/seed/3198/240/180', 'https://picsum.photos/seed/4637/240/180', 'https://picsum.photos/seed/3307/240/180', 'https://picsum.photos/seed/3802/240/180', 'https://picsum.photos/seed/723/240/180', 'https://picsum.photos/seed/9484/240/180', 'https://picsum.photos/seed/1816/240/180', 'https://picsum.photos/seed/9292/240/180', 'https://picsum.photos/seed/4968/240/180', 'https://picsum.photos/seed/9297/240/180', 'https://picsum.photos/seed/2856/240/180', 'https://picsum.photos/seed/8557/240/180', 'https://picsum.photos/seed/8641/240/180', 'https://picsum.photos/seed/5891/240/180' ]

const RecStars: React.FC<RouteComponentProps> = () => {
  const [mode, setMode] = useState(true)

  const handleSwitch = ()=>{
    setMode(!mode)
  }

  return (
    <div>
      <div
        css={css`
          margin: 20px 0;
          padding-left: 12px;
          display: flex;
          overflow-x: auto;
          ${mode && 'scroll-snap-type: x mandatory;'}
        `}>
        {initBgs.map(img => (
          <div
            className='card'
            key={img}
            css={css`
              height: 180px;
              min-width: 240px;
              margin-right: 8px;
              background: url(${img}) center/cover no-repeat;
              scroll-snap-align: start;
            `}></div>
        ))}
      </div>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <button css={css`
          background: royalblue;
          color: white;
          border: none;
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 14px;
          margin-top: 100px;
        `} onClick={handleSwitch}>{mode ? '切换无极滚动' : '还原'}</button>
      </div>
    </div>
  )
}

export default RecStars
