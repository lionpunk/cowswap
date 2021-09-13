import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

interface IconProps {
  width?: string
  height?: string
  color?: string
}

const SvgWrap = styled.svg`
  &.fill {
    fill: ${({ theme }) => theme.text4};
  }
  &.stroke {
    stroke: ${({ theme }) => theme.text4};
  }
`

export const RepeatIcon: FunctionComponent<IconProps> = ({ color, width = '16' }): React.ReactElement => {
  return (
    <SvgWrap
      className="icon stroke"
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill={'none'}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </SvgWrap>
  )
}

export const QuestionIcon: FunctionComponent<IconProps> = ({ color, width = '16' }): React.ReactElement => {
  return (
    <SvgWrap
      className="icon fill"
      width={width}
      height={width}
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
    </SvgWrap>
  )
}

RepeatIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
}

QuestionIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
}
