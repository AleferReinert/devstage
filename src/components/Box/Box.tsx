import type { ComponentProps, ReactNode } from 'react'

interface BoxProps extends ComponentProps<'div'> {
	children: ReactNode
	heading?: ReactNode
}
export function Box({ children, heading, ...rest }: BoxProps) {
	return (
		<div className={`bg-gray-700 border border-gray-600 rounded p-6 md:p-8 ${rest.className}`}>
			{heading && <h2 className='text-xl text-gray-200 mb-6 flex justify-between'>{heading}</h2>}
			{children}
		</div>
	)
}
