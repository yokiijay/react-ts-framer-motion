import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { cover } from 'polished'
import { center } from '../Common/globalCSS'
import Slider from '../components/Slider'
import { RouteComponentProps } from '@reach/router'

const SliderPage: React.FC<RouteComponentProps> = () => {
  return(
    <Container>
      <Slider width={400} ovalSize={30} initialProgress={0} />
    </Container>
  )
}

const Container: React.FC = props => {
  return (
    <div
      css={css`
        position: relative;
        ${cover()}
        ${center};
        flex-direction: column;
      `}
      {...props}>
      {props.children}
    </div>
  )
}

export default SliderPage