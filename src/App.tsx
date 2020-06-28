import React from 'react'
import { Router } from '@reach/router'
import SliderPage from './pages/sliderPage'
/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import { normalize } from 'polished'

const App: React.FC = () => {
  return(
    <React.Fragment>
      <Global styles={css`
        ${normalize()};
        html,body,#root,#router {
          height: 100%;
        }
      `} />

      <Router id='router'>
        <SliderPage path='slider' />
      </Router>
    </React.Fragment>
  )
}

export default App