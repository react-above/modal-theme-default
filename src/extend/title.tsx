import clsx from 'clsx'
import React, { forwardRef, HTMLAttributes } from 'react'

type HeadingProps = HTMLAttributes<HTMLHeadingElement>

export const Title = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props, ref) => (
    <h2 {...props} ref={ref} className={clsx('above-title', props.className)}>
      {props.children}
    </h2>
  )
)
