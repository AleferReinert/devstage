import type { ComponentProps, ReactNode } from 'react'

interface BoxProps extends ComponentProps<'div'> {
	children: ReactNode
}
export function Box({ children, className, ...rest }: BoxProps) {
	return (
		<div className={`bg-gray-700 border border-gray-600 rounded ${className}`} {...rest}>
			{children}
		</div>
	)
}
