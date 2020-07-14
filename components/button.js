import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './button.module.css'

function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}

function Button({ full, children, className, ...props }) {
  const Comp = props.href ? LinkButton : BaseButton
  return (
    <Comp
      className={cn(styles.button, full && styles.fullWidth, className)}
      {...props}
    >
      {children}
    </Comp>
  )
}

export default Button
