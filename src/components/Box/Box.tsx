import type { ComponentProps, ReactNode } from 'react'

interface BoxProps extends ComponentProps<'div'> {
	children: ReactNode
	heading?: ReactNode
}
export function Box({ children, heading, className, ...rest }: BoxProps) {
	return (
		<div className={`bg-gray-700 border border-gray-600 rounded ${className}`} {...rest}>
			{heading && <h2 className='text-xl text-gray-200 mb-6 flex justify-between'>{heading}</h2>}
			{children}
		</div>
	)
}
