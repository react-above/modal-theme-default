import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { FrameFC } from '@react-above/modal'
import { DivProps } from './types'

export const Screen = forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div {...props} ref={ref} className={clsx('above-screen', props.className)}>
    {props.children}
  </div>
))

export const Overlay = forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div {...props} ref={ref} className={clsx('above-overlay', props.className)}>
    {props.children}
  </div>
))

export const Container = forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div {...props} ref={ref} className={clsx('above-modal', props.className)}>
    {props.children}
  </div>
))

export const Frame: FrameFC = ({ refs, children }) => (
  <Screen ref={refs.screen}>
    <Overlay ref={refs.overlay} />
    <Container ref={refs.modal}>{children}</Container>
  </Screen>
)
