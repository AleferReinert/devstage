import type { ReactNode } from 'react'

interface BoxProps {
	children: ReactNode
}
export function Box({ children }: BoxProps) {
	return <div className='bg-gray-700 border border-gray-600 rounded p-6 md:p-8'>{children}</div>
}
