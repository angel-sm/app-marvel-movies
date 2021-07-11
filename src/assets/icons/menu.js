import React from 'react'
import styled from 'styled-components'

export const Menu = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 2));
    width: 20px;
    height: 20px;
    border-radius: 3px;
    color: rgb(249, 250, 251);;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 1px;
    background: currentColor;
    border-radius: 3px;
    top: 6px;
    left: 2px;
    box-shadow: 0 4px 0, 0 8px 0;
  }
`