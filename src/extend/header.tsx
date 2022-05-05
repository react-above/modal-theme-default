import React, { forwardRef } from 'react'
import { DivProps } from '../types'
import { Close } from './close'
import { HeaderBox } from './header-box'
import { Title } from './title'

type Props = {
  title?: string
  close?: () => void
} & DivProps

export const Header = forwardRef<HTMLDivElement, Props>(
  ({ title, close, ...rest }, ref) => (
    <HeaderBox ref={ref} {...rest}>
      {title && <Title>{title}</Title>}
      {close && <Close onClick={close} />}
    </HeaderBox>
  )
)
