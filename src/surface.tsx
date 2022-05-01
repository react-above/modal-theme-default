import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { DivProps } from './types'

type Props = {
  fullscreen?: boolean | 'strict'
} & DivProps

export const Surface = forwardRef<HTMLDivElement, Props>(
  ({ className, fullscreen = false, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={clsx('above-surface', className)}
      data-fullscreen={fullscreen}
      {...rest}
    >
      {children}
    </div>
  )
)
