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
  <div
    {...props}
    ref={ref}
    className={clsx('above-container', props.className)}
  >
    {props.children}
  </div>
))

export const Frame: FrameFC = ({
  screenRef,
  overlayRef,
  containerRef,
  children,
}) => (
  <Screen ref={screenRef}>
    <Overlay ref={overlayRef} />
    <Container ref={containerRef}>{children}</Container>
  </Screen>
)
