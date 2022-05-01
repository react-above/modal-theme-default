import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { DivProps } from './types'

export const Body = forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div {...props} ref={ref} className={clsx('above-body', props.className)}>
    {props.children}
  </div>
))
