import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { DivProps } from '../types'

export const HeaderBox = forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div {...props} ref={ref} className={clsx('above-header', props.className)}>
    {props.children}
  </div>
))
